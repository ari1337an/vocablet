import db from "@/server/database/db";

export default class EntitlementRepo {
  static async clearEntitlementOfUserByCustomerId(customerId: any) {
    return await db.entitlement.deleteMany({
      where: {
        User: {
          Subscription: {
            stripeCustomerId: customerId,
          },
        },
      },
    });
  }
  static async getEntitlementOfUser(userId: string) {
    return await db.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        Entitlements: true,
      },
    });
  }

  static async markEntitlementsOfSubscriptionIdAsInactive(
    customerEmail: string
  ) {
    await db.entitlement.updateMany({
      where: {
        User: {
          email: customerEmail,
        },
      },
      data: {
        active: false,
      },
    });
  }

  static async markEntitlementsOfSubscriptionIdAsActive(customerEmail: string) {
    await db.entitlement.updateMany({
      where: {
        User: {
          email: customerEmail,
        },
      },
      data: {
        active: true,
      },
    });
  }

  static async clearEntitlementOfUser(userId: string) {
    return await db.entitlement.deleteMany({
      where: {
        userId: userId,
      },
    });
  }

  static async assignEntitlementToUser(userId: string, featuresList: string[]) {
    await EntitlementRepo.clearEntitlementOfUser(userId);

    const entitlements = featuresList.map((feature) => ({
      userId: userId,
      feature: feature,
      active: true,
    })) as any;

    return await db.entitlement.createMany({
      data: entitlements,
      skipDuplicates: true, // Ensures no duplicate entries if feature already exists
    });
  }
}
