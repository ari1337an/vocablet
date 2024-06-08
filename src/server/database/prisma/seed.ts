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
      stripePriceId: "price_1PPPnNAaLwh5oFJLF5UteRz4",
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
      stripePriceId: "price_1PPPnNAaLwh5oFJLWVbDeKmo",
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
      stripePriceId: "price_1PPPnNAaLwh5oFJL6Rp8AYN5",
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
      stripePriceId: "price_1PPPnNAaLwh5oFJLPl08EfmS",
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
