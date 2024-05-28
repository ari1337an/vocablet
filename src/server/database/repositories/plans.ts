import db from "@/server/database/db";
import { PlanSlug } from "@prisma/client";

export default class PlansRepo {
  static findPlanBySlug(slug: PlanSlug) {
    return db.plan.findUnique({
      where: { slug },
    });
  }
}
