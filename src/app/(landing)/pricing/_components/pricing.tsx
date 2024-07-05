"use client";

import React, { useEffect } from "react";

const StripePricingTable = ({
  currentUserEmail,
}: {
  currentUserEmail: string | null | undefined;
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (currentUserEmail) {
    return React.createElement("stripe-pricing-table", {
      "pricing-table-id": process.env.NEXT_PUBLIC_PRICING_TABLE_ID,
      "publishable-key": process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      "customer-email": currentUserEmail,
    });
  } else {
    return React.createElement("stripe-pricing-table", {
      "pricing-table-id": process.env.NEXT_PUBLIC_PRICING_TABLE_ID,
      "publishable-key": process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    });
  }
};

export default function PricingContentPage({
  currentUserEmail,
}: {
  currentUserEmail: string | null | undefined;
}) {
  return (
    <div className="w-full pt-40">
      <StripePricingTable currentUserEmail={currentUserEmail} />
    </div>
  );
}
