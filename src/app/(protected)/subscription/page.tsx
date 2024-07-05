"use server";

import SubscriptionRepo from "@/server/database/repositories/subscription";
import React from "react";
import { auth } from "@/server/authentication/auth";

export default async function SubscriptionPage() {
  const session = await auth();
  if (!session || !session.user || !session.user.userId) return null;

  const subscriptions = await SubscriptionRepo.findAllSubscriptionByUserId(
    session.user.userId
  );

  return (
    <div className="flex flex-col gap-y-10 items-center justify-center h-full">
      {subscriptions.length === 0 ? (
        <div className="text-center text-lg">
          You don&apos;t have any subscription!
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          {subscriptions.map((subscription: any) => (
            <div
              key={subscription.stripeCustomerId || `topup-${subscription.id}`}
              className="bg-black px-12 py-10 rounded-lg shadow-md border "
            >
              {subscription.stripePriceId ===
                process.env.PRICING_PLAN_1_PRICE_ID && (
                <p className="text-sm ">
                  Plan: {process.env.PRICING_PLAN_1_NAME}
                </p>
              )}
              {subscription.stripePriceId ===
                process.env.PRICING_PLAN_2_PRICE_ID && (
                <p className="text-sm ">
                  Plan: {process.env.PRICING_PLAN_2_NAME}
                </p>
              )}

              <p className="text-sm">
                Status:{" "}
                {subscription.stripeSubscriptionActive &&
                !subscription.stripeInvoiceFailed ? (
                  <span className="text-green-600 font-bold">ACTIVE</span>
                ) : subscription.stripeInvoiceFailed ? (
                  <span className="text-red-600 font-bold">
                    INACTIVE (PAYMENT FAILED)
                  </span>
                ) : (
                  <span className="text-red-600 font-bold">INACTIVE</span>
                )}
              </p>

              {subscription.stripeSubscriptionActive &&
                !subscription.stripeInvoiceFailed && (
                  <p className="text-sm">
                    Renews:{" "}
                    {subscription.stripeSubscriptionExpires === null ? (
                      <span className="text-green-600 font-bold">
                        Each month
                      </span>
                    ) : (
                      <span className="text-red-600 font-bold">NO</span>
                    )}
                  </p>
                )}

              {subscription.stripeCustomerId && (
                <a
                  href={`/subscription/manage/${subscription.stripeCustomerId}`}
                  className="text-blue-500 underline mt-2 inline-block"
                  target="_blank"
                >
                  Manage Billing
                </a>
              )}
              {!subscription.stripeCustomerId &&
                !subscription.stripeSubscriptionId && (
                  <p className="text-sm ">One-time Top-up</p>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
