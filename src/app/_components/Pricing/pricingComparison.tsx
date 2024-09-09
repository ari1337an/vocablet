"use client";

import SectionTitle from "../Common/SectionTitle";
import CheckGreenIcon from "@/app/_icons/check-green"; // Ensure the path is correct
import CircleXIcon from "@/app/_icons/circle-x"; // Ensure the path is correct
import React from "react";

interface Features {
  [key: string]: string | React.ReactNode;
}

interface PricingPlan {
  name: string;
  slug: string;
  price: string;
  interval: string;
  features: Features;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Vocablet Mini",
    slug: "mini",
    price: "$2.99",
    interval: "mo",
    features: {
      "AI Chat Messages Monthly": "0/mo",
      "Roleplay Feature in AI Chat": <CircleXIcon className="w-4 h-4 mx-auto fill-rose-500" />,
      "Flashcards Learning": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Word Meaning with AI": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Generate Words with AI": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Priority Support": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Cancel Anytime": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
    },
  },
  {
    name: "Vocablet Starter",
    slug: "starter",
    price: "$7.99",
    interval: "mo",
    features: {
      "AI Chat Messages Monthly": "7000/mo",
      "Roleplay Feature in AI Chat": <CircleXIcon className="w-4 h-4 mx-auto fill-rose-500" />,
      "Flashcards Learning": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Word Meaning with AI": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Generate Words with AI": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Priority Support": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Cancel Anytime": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
    },
  },
  {
    name: "Vocablet Pro",
    slug: "pro",
    price: "$9.99",
    interval: "mo",
    features: {
      "AI Chat Messages Monthly": "9000/mo",
      "Roleplay Feature in AI Chat": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Flashcards Learning": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Word Meaning with AI": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Generate Words with AI": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Priority Support": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
      "Cancel Anytime": <CheckGreenIcon className="w-4 h-4 mx-auto" />,
    },
  },
];

const PricingTable = () => {
  return (
    <section id="pricing" className="relative py-16">
      <div className="container">
        <SectionTitle
          title="Compare our plans"
          paragraph="and find the right fit"
          center
          width="665px"
        />

        <div className="overflow-x-auto">
          <table className="w-full text-white table-auto border-collapse">
            <thead className="text-body-color">
              <tr>
                <th className="p-4 text-left border-b-2 "></th>
                {pricingPlans.map((plan) => (
                  <th key={plan.slug} className="p-4 text-center border-b-2 ">
                    <div className="p-2 text-white bg-secondary border-primary border-2 rounded-full">
                      {plan.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="p-4 border-b ">Price</td>
                {pricingPlans.map((plan) => (
                  <td key={plan.slug} className="p-4 text-center border-b ">
                    {plan.price}/{plan.interval}
                  </td>
                ))}
              </tr>
              {Object.keys(pricingPlans[0].features).map((feature) => (
                <tr key={feature} className="">
                  <td className="p-4 border-b ">{feature}</td>
                  {pricingPlans.map((plan) => (
                    <td key={plan.slug} className="p-4 text-center border-b ">
                      {plan.features[feature]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
