import db from "@/server/database/db";

export default class SubscriptionRepo {
  static async updatePriceIdForCustomer(customerId: string, priceId: string) {
    await db.subscription.update({
      where: {
        stripeCustomerId: customerId,
      },
      data: {
        stripePriceId: priceId,
      },
    });
  }
  static async markAsFailedToRenew(stripeCustomerId: string) {
    const subscription = await db.subscription.findUnique({
      where: { stripeCustomerId: stripeCustomerId },
    });

    if (subscription) {
      return await db.subscription.update({
        where: { stripeCustomerId: stripeCustomerId },
        data: {
          stripeInvoiceFailed: true,
          messageUsed: subscription.messageCurrencyMax,
        },
      });
    }

    throw new Error(
      `Subscription not found for customer ID: ${stripeCustomerId}`
    );
  }

  static markAsSuccessfullyRenewed(stripeCustomerId: string) {
    return db.subscription.update({
      where: { stripeCustomerId: stripeCustomerId },
      data: {
        stripeSubscriptionExpires: null,
        stripeInvoiceFailed: false,
        messageUsed: 0,
      },
    });
  }

  static markAsSubscriptionUpgradedOrDowngraded(stripeCustomerId: string) {
    return db.subscription.update({
      where: { stripeCustomerId: stripeCustomerId },
      data: {
        stripeSubscriptionExpires: null,
        stripeInvoiceFailed: false,
      },
    });
  }

  static async findAllSubscriptionByUserId(userId: string) {
    return await db.subscription.findMany({
      where: { userId },
      orderBy: { subscribedAt: "desc" },
    });
  }

  static async findAllActiveSubscriptionByUserId(userId: string) {
    return await db.subscription.findMany({
      where: { userId, stripeSubscriptionActive: true },
      orderBy: { subscribedAt: "desc" },
    });
  }

  static async findSubscriptionByStripeCustomerId(stripeCustomerId: string) {
    return await db.subscription.findFirst({
      where: { stripeCustomerId },
    });
  }

  static async assignSubscription(
    emailId: string,
    stripeCustomerId: string,
    stripePriceId: string,
    stripeSubscriptionId: string,
    message_limit: number
  ) {
    return await db.subscription.create({
      data: {
        user: { connect: { email: emailId } },
        stripeCustomerId,
        stripePriceId,
        stripeSubscriptionId,
        stripeSubscriptionActive: true,
        stripeSubscriptionExpires: null,
        messageCurrencyMax: message_limit,
        messageUsed: 0,
      },
    });
  }

  static async updateExpires(
    stripeCustomerId: string,
    stripeSubscriptionExpires: number | null
  ) {
    return await db.subscription.update({
      where: { stripeCustomerId: stripeCustomerId },
      data: {
        stripeSubscriptionExpires:
          stripeSubscriptionExpires === null
            ? null
            : new Date(parseInt(stripeSubscriptionExpires + "") * 1000),
      },
    });
  }

  static async deleteSubscription(stripeCustomerId: string) {
    return await db.subscription.delete({
      where: { stripeCustomerId: stripeCustomerId },
    });
  }

  static async updateMessageCurrencyMax(
    stripeCustomerId: string,
    newMessageCurrency: number
  ) {
    return await db.subscription.update({
      where: {
        stripeCustomerId: stripeCustomerId,
      },
      data: {
        messageCurrencyMax: newMessageCurrency,
      },
    });
  }

  static async getMessageRemainingCount(stripeCustomerId: string) {
    const subscription = await db.subscription.findUnique({
      where: { stripeCustomerId: stripeCustomerId },
    });

    if (subscription) {
      if (
        subscription.stripeSubscriptionActive &&
        !subscription.stripeInvoiceFailed
      ) {
        return Math.max(
          0,
          subscription.messageCurrencyMax - subscription.messageUsed
        );
      } else {
        return 0;
      }
    }

    throw new Error(
      `Subscription not found for customer ID: ${stripeCustomerId}`
    );
  }

  static async getMessageRemainingCountByUserId(userId: string) {
    const subscription = await db.subscription.findUnique({
      where: { userId: userId },
    });

    if (subscription) {
      if (
        subscription.stripeSubscriptionActive &&
        !subscription.stripeInvoiceFailed
      ) {
        return Math.max(
          0,
          subscription.messageCurrencyMax - subscription.messageUsed
        );
      } else {
        return 0;
      }
    }

    throw new Error(`Subscription not found for user id: ${userId}`);
  }

  static async recordOneMessageUseInDBForUser(userId: string) {
    return await db.subscription.update({
      where: {
        userId: userId,
      },
      data: {
        messageUsed: { increment: 1 },
      },
    });
  }

  static async recordNMessageUseInDBForUser(
    userId: string,
    incrementBy: number = 1
  ) {
    return await db.subscription.update({
      where: {
        userId: userId,
      },
      data: {
        messageUsed: { increment: incrementBy },
      },
    });
  }
}
