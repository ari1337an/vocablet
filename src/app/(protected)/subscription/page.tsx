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
  console.log(subscriptions);

  const subscriptionsActive =
    await SubscriptionRepo.findAllActiveSubscriptionByUserId(
      session.user.userId
    );

  const unUsedUnits =
    subscriptionsActive.reduce((acc, sub) => acc + sub.maxUsageUnit, 0) -
    subscriptionsActive.reduce((acc, sub) => acc + sub.usedUnit, 0);

  return (
    <div className="flex flex-col gap-y-10 items-center justify-center h-full">
      <h2 className="font-bold text-2xl underline">
        You have {unUsedUnits} AI Tokens
      </h2>
      {subscriptions.length === 0 ? (
        <div className="text-center text-lg">
          You don&apos;t have any subscriptions!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          {subscriptions.map((subscription) => (
            <div
              key={subscription.stripeCustomerId || `topup-${subscription.id}`}
              className="subscription-item bg-secondary p-6 rounded-lg shadow-md border border-gray-200"
            >
              {subscription.stripeCustomerId && (
                <p className="text-sm ">
                  Subscription ID: {subscription.stripeCustomerId}
                </p>
              )}
              {subscription.stripeSubscriptionActive && (
                <>
                  <p className="text-sm">
                    Max Usage Units: {subscription.maxUsageUnit}
                  </p>
                  <p className="text-sm">
                    Used Units: {subscription.usedUnit}
                  </p>
                </>
              )}

              <p className="text-sm">
                Active:{" "}
                {subscription.stripeSubscriptionActive ? (
                  <span className="text-green-600 font-bold">ACTIVE</span>
                ) : (
                  <span className="text-red-600 font-bold">INACTIVE</span>
                )}
              </p>
              {subscription.stripeSubscriptionActive && (
                <p className="text-sm">
                  Renews:{" "}
                  {subscription.stripeSubscriptionExpires === null ? (
                    <span className="text-green-600 font-bold">Each month</span>
                  ) : (
                    <span className="text-red-600 font-bold">NO</span>
                  )}
                </p>
              )}

              {subscription.stripeSubscriptionActive &&
                subscription.stripeCustomerId && (
                  <a
                    href={`/subscription/manage/${subscription.stripeCustomerId}`}
                    className="text-blue-500 underline mt-2 inline-block"
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
