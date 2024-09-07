"use server";

import MessageComponent from "@/app/_components/message/message";
import createCheckoutSession from "@/server/actions/stripe/create-checkout-session";
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

  const getPlanById = (planSlug: string) => {
    if (planSlug.toLowerCase() === process.env.PRICING_PLAN_1_SLUG) {
      return process.env.PRICING_PLAN_1_PRICE_ID;
    } else if (planSlug.toLowerCase() === process.env.PRICING_PLAN_2_SLUG) {
      return process.env.PRICING_PLAN_2_PRICE_ID;
    } else if (planSlug.toLowerCase() === process.env.PRICING_PLAN_3_SLUG) {
      return process.env.PRICING_PLAN_3_PRICE_ID;
    } else {
      throw new Error("Invalid Plan!");
    }
  };

  const getPriceByPriceId = (priceId: string) => {
    if (priceId === process.env.PRICING_PLAN_1_PRICE_ID)
      return parseFloat(
        (process.env.PRICING_PLAN_1_PRICE_VALUE as string) || "2.99"
      );
    else if (priceId === process.env.PRICING_PLAN_2_PRICE_ID)
      return parseFloat(
        (process.env.PRICING_PLAN_2_PRICE_VALUE as string) || "15"
      );
    else if (priceId === process.env.PRICING_PLAN_3_PRICE_ID)
      return parseFloat(
        (process.env.PRICING_PLAN_3_PRICE_VALUE as string) || "22"
      );
    else return 0.0;
  };

  try {
    // fetch plan details from the server
    const priceId = getPlanById(plan);

    if (!priceId) {
      return (
        <MessageComponent
          response={{ success: false, message: "Invalid Plan!" }}
        />
      );
    }

    const price = getPriceByPriceId(priceId);

    // create a checkout session
    const stripeSession = await createCheckoutSession(priceId);

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
      <StripeCheckOutRedirect
        stripeSessionId={stripeSession.stripeSessionId}
        price={price}
        priceId={priceId}
      />
    );
  } catch (error) {
    return (
      <MessageComponent
        response={{ success: false, message: (error as Error).message }}
      />
    );
  }
}
