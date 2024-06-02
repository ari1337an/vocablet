import db from "@/server/database/db";

export default class SubscriptionRepo {
  static findAllSubscriptionByUserId(userId: string) {
    return db.subscription.findMany({
      where: { userId },
      orderBy: { subscribedAt: "desc" },
    });
  }

  static findAllActiveSubscriptionByUserId(userId: string) {
    return db.subscription.findMany({
      where: { userId, stripeSubscriptionActive: true },
      orderBy: { subscribedAt: "desc" },
    });
  }

  static findSubscriptionByStripeCustomerId(stripeCustomerId: string) {
    return db.subscription.findFirst({
      where: { stripeCustomerId },
    });
  }

  static assignSubscription(
    userId: string,
    stripeCustomerId: string,
    stripePriceId: string,
    stripeSubscriptionId: string,
    maxUsageUnit: number
  ) {
    return db.subscription.create({
      data: {
        user: { connect: { id: userId } },
        stripeCustomerId,
        stripePriceId,
        stripeSubscriptionId,
        maxUsageUnit,
      },
    });
  }

  static updateExpires(
    subscriptionId: string,
    stripeSubscriptionExpires: number | null
  ) {
    return db.subscription.update({
      where: { stripeSubscriptionId: subscriptionId },
      data: {
        stripeSubscriptionExpires:
          stripeSubscriptionExpires === null
            ? null
            : new Date(parseInt(stripeSubscriptionExpires + "") * 1000),
      },
    });
  }

  static deleteSubscription(
    subscriptionId: string,
    stripeSubscriptionExpires: number
  ) {
    return db.subscription.update({
      where: { stripeSubscriptionId: subscriptionId },
      data: {
        stripeSubscriptionActive: false,
        stripeSubscriptionExpires:
          stripeSubscriptionExpires === null
            ? null
            : new Date(parseInt(stripeSubscriptionExpires + "") * 1000),
      },
    });
  }
}
