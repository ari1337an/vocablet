"use server";

import MessageComponent from "@/app/_components/message/message";
import createCheckoutSession from "@/server/actions/stripe/create-checkout-session";
import PlansRepo from "@/server/database/repositories/plans";
import planToPlanSlugDTO from "@/server/dto/plan-to-planslug";
import { PlanSlug } from "@prisma/client";
import React from "react";
import StripeCheckOutRedirect from "./_components/stripe-checkout-redirect";

export default async function BuyPage({
  params,
}: {
  params: { plan: string };
}) {
  const plan = params.plan;

  if (!plan) {
    return (
      <MessageComponent
        response={{ success: false, message: "Invalid Plan!" }}
      />
    );
  }

  const planSlug = planToPlanSlugDTO(plan);

  if (!planSlug) {
    return (
      <MessageComponent
        response={{ success: false, message: "Invalid Plan!" }}
      />
    );
  }

  // fetch plan details from the server
  const planDb = await PlansRepo.findPlanBySlug(planSlug as PlanSlug);
  if (!planDb || !planDb.stripePriceId) {
    return (
      <MessageComponent
        response={{ success: false, message: "Invalid Plan!" }}
      />
    );
  }

  // create a checkout session
  const stripeSession = await createCheckoutSession(
    planDb.stripePriceId,
    planDb.type,
    planDb?.itemUnit
  );

  if (
    !stripeSession ||
    !stripeSession.success ||
    !stripeSession.stripeSessionId
  ) {
    return (
      <MessageComponent
        response={{
          success: false,
          message: "Failed to create checkout session!",
        }}
      />
    );
  }

  return (
    <StripeCheckOutRedirect stripeSessionId={stripeSession.stripeSessionId} />
  );
}
