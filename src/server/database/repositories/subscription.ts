import db from "@/server/database/db";
import Stripe from "stripe";

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
    return await db.subscription.update({
      where: { stripeCustomerId: stripeCustomerId },
      data: { stripeInvoiceFailed: true },
    });
  }
  static markAsSuccessfullyRenewed(stripeCustomerId: string) {
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
    stripeSubscriptionId: string
  ) {
    return await db.subscription.create({
      data: {
        user: { connect: { email: emailId } },
        stripeCustomerId,
        stripePriceId,
        stripeSubscriptionId,
        stripeSubscriptionActive: true,
        stripeSubscriptionExpires: null,
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
}
