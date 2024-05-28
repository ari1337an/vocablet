"use server";

import MessageComponent from "@/app/_components/message/message";
import React from "react";
import StripeBillingRedirect from "./_components/stripe-billing-redirect";
import SubscriptionRepo from "@/server/database/repositories/subscription";
import createPortalSession from "@/server/actions/stripe/create-portal-session";

export default async function BuyPage({
  params,
}: {
  params: { customerId: string };
}) {
  const customerId = params?.customerId;

  if (!customerId) {
    return (
      <MessageComponent
        response={{ success: false, message: "Invalid Customer ID!" }}
      />
    );
  }

  // fetch subscription details from the server
  const subscription = await SubscriptionRepo.findSubscriptionByStripeCustomerId(customerId);
  if (!subscription || !subscription.stripeCustomerId) {
    return (
      <MessageComponent
        response={{ success: false, message: "Invalid customer ID!" }}
      />
    );
  }

  // create a checkout session
  const stripeSession = await createPortalSession(subscription.stripeCustomerId);

  if (
    !stripeSession ||
    !stripeSession.success ||
    !stripeSession.url
  ) {
    return (
      <MessageComponent
        response={{
          success: false,
          message: "Failed to create portal session!",
        }}
      />
    );
  }

  return (
    <StripeBillingRedirect stripeBillingSessionUrl={stripeSession.url} />
  );
}
