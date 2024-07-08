"use client";

import CheckGreenIcon from "@/app/_icons/check-green"; // Ensure the path is correct
import React from "react";

interface PricingPlan {
  name: string;
  slug: string;
  price: string;
  interval: string;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Vocablet Starter",
    slug: "starter",
    price: "$14.99",
    interval: "month",
    features: [
      "Vocablet AI Chat (max 30 message/conversation)",
      "Roleplay Feature in AI Chat",
      "Flashcards Learning",
      "Priority Support",
      "Cancel Anytime",
    ],
  },
  {
    name: "Vocablet Pro",
    slug: "pro",
    price: "$29.99",
    interval: "month",
    isPopular: true,
    features: [
      "Vocablet AI Chat (unlimited message/conversation)",
      "Roleplay Feature in AI Chat",
      "Flashcards Learning",
      "Word Meaning with AI",
      "Priority Support",
      "Cancel Anytime",
    ],
  },
];

const PricingTable = ({
  currentUserEmail,
}: {
  currentUserEmail: string | null | undefined;
}) => {
  const handleSubscribe = (planSlug: string) => {
    if (!currentUserEmail) {
      // Redirect to signup page with callback
      const callbackUrl = encodeURIComponent(`/pricing`);
      window.location.href = `/auth/signup?callbackUrl=${callbackUrl}`;
    } else {
      // TODO: Implement actual subscription logic for logged-in users
      console.log(`Subscribe to ${planSlug}`);
      window.location.href = `/subscription/buy/${planSlug}`;
    }
  };

  return (
    <div className="flex justify-center items-center bg-secondary text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg p-8 flex flex-col ${
              plan.isPopular
                ? "border-2 border-orange-500 bg-slate-700"
                : "bg-black"
            }`}
          >
            {plan.isPopular && (
              <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
                Most popular
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <div className="text-4xl font-bold mb-2">{plan.price}</div>
            <div className="text-gray-400 mb-6">per {plan.interval}</div>
            <ul className="mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex flex-row items-center mb-2">
                  <CheckGreenIcon className="w-4 h-4 mr-2 shrink-0" />
                  <div>{feature}</div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleSubscribe(plan.slug)}
              className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-emerald-600 transition duration-200"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PricingContentPage({
  currentUserEmail,
}: {
  currentUserEmail: string | null | undefined;
}) {
  return (
    <div className="w-full pt-40">
      <PricingTable currentUserEmail={currentUserEmail} />
    </div>
  );
}
