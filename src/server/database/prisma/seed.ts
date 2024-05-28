import {
  PlanSlug,
  PlanType,
  PrismaClient,
  SubscriptionUsageType,
} from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.plan.upsert({
    where: { slug: PlanSlug.STARTER },
    update: {},
    create: {
      slug: PlanSlug.STARTER,
      itemType: SubscriptionUsageType.AI_TOKEN,
      itemUnit: 100000,
      type: PlanType.MONTHLY,
      stripePriceId: "price_1PL5oWAaLwh5oFJL2PFYe72d",
    },
  });
  await prisma.plan.upsert({
    where: { slug: PlanSlug.PRO },
    update: {},
    create: {
      slug: PlanSlug.PRO,
      itemType: SubscriptionUsageType.AI_TOKEN,
      itemUnit: 400000,
      type: PlanType.MONTHLY,
      stripePriceId: "price_1PL5oWAaLwh5oFJLdH9FWn1M",
    },
  });
  await prisma.plan.upsert({
    where: { slug: PlanSlug.ADVANCED },
    update: {},
    create: {
      slug: PlanSlug.ADVANCED,
      itemType: SubscriptionUsageType.AI_TOKEN,
      itemUnit: 800000,
      type: PlanType.MONTHLY,
      stripePriceId: "price_1PL5oWAaLwh5oFJLoaIrjrmu",
    },
  });
  await prisma.plan.upsert({
    where: { slug: PlanSlug.REFILL },
    update: {},
    create: {
      slug: PlanSlug.REFILL,
      itemType: SubscriptionUsageType.AI_TOKEN,
      itemUnit: 100000,
      type: PlanType.ONETIME,
      stripePriceId: "price_1PL5oWAaLwh5oFJLkw0Hs7F1",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
