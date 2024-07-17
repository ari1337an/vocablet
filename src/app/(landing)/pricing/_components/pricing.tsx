"use client";

import CheckGreenIcon from "@/app/_icons/check-green"; // Ensure the path is correct
import CircleXIcon from "@/app/_icons/circle-x"; // Ensure the path is correct
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
    price: "$15",
    interval: "month",
    features: [
      "500 AI Chat Messages Monthly",
      "30 AI Messages In Single Conversation",
      "Roleplay Feature in AI Chat",
      "Flashcards Learning",
      "Word Meaning with AI",
      "Generate Words with AI",
      "Priority Support",
      "Cancel Anytime",
    ],
  },
  {
    name: "Vocablet Pro",
    slug: "pro",
    price: "$22",
    interval: "month",
    isPopular: true,
    features: [
      "1000 AI Chat Messages Monthly",
      "Unlimited AI Messages In Single Conversation",
      "Roleplay Feature in AI Chat",
      "Flashcards Learning",
      "Word Meaning with AI",
      "Generate Words with AI",
      "Priority Support",
      "Cancel Anytime",
    ],
  },
  {
    name: "Vocablet Advanced",
    slug: "advanced",
    price: "$28",
    interval: "month",
    features: [
      "1500 AI Chat Messages Monthly",
      "Unlimited AI Messages In Single Conversation",
      "Roleplay Feature in AI Chat",
      "Flashcards Learning",
      "Word Meaning with AI",
      "Generate Words with AI",
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
    <div className="flex flex-col justify-center items-center bg-secondary text-white p-8">
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg p-8 flex flex-col shadow-lg ${
              plan.isPopular
                ? "border-2 border-orange-500 bg-slate-700"
                : "bg-gray-800"
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
            <ul className="mb-8 space-y-2">
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
      <div className="max-w-6xl mt-12 w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white table-auto border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left border-b-2 border-gray-600">Feature</th>
                {pricingPlans.map((plan) => (
                  <th key={plan.name} className="p-4 text-center border-b-2 border-gray-600">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Price", values: ["$15/month", "$20/month", "$28/month"] },
                { feature: "AI Chat Messages Monthly", values: ["500", "1000", "1500"] },
                { feature: "AI Messages In Single Conversation", values: ["30", "Unlimited", "Unlimited"] },
                { feature: "Roleplay Feature in AI Chat", values: [true, true, true] },
                { feature: "Flashcards Learning", values: [true, true, true] },
                { feature: "Word Meaning with AI", values: [true, true, true] },
                { feature: "Generate Words with AI", values: [true, true, true] },
                { feature: "Priority Support", values: [true, true, true] },
                { feature: "Cancel Anytime", values: [true, true, true] },
              ].map((item) => (
                <tr key={item.feature} className="odd:bg-gray-700 even:bg-gray-800">
                  <td className="p-4 border-b border-gray-600">{item.feature}</td>
                  {item.values.map((value, index) => (
                    <td key={pricingPlans[index].name} className="p-4 text-center border-b border-gray-600">
                      {typeof value === "boolean" ? (
                        value ? (
                          <CheckGreenIcon className="w-4 h-4 mx-auto" />
                        ) : (
                          <CircleXIcon className="w-4 h-4 mx-auto fill-rose-500" />
                        )
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
