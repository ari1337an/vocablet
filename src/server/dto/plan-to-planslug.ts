import { PlanSlug } from "@prisma/client";

export default function planToPlanSlugDTO(plan: string) {
  const formattedPlan = plan.toUpperCase() as keyof typeof PlanSlug;
  return PlanSlug[formattedPlan] || null;
}
