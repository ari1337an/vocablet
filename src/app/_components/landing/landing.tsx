"use client";

import React, { useEffect } from "react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

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
      "pricing-table-id": "prctbl_1PXRV3AaLwh5oFJLBN4MjICT",
      "publishable-key":
        "pk_test_51OlDFsAaLwh5oFJLOYToj0NelfaoVIMt9gGRzwZHNaHVtXu6pBLdTwLp93ixIYLUECYvKdV5GJtGVxjjw2BY0mmK00Uv9ryb4j",
      "customer-email": currentUserEmail,
    });
  } else {
    return React.createElement("stripe-pricing-table", {
      "pricing-table-id": "prctbl_1PXRV3AaLwh5oFJLBN4MjICT",
      "publishable-key":
        "pk_test_51OlDFsAaLwh5oFJLOYToj0NelfaoVIMt9gGRzwZHNaHVtXu6pBLdTwLp93ixIYLUECYvKdV5GJtGVxjjw2BY0mmK00Uv9ryb4j",
    });
  }
};

export default function LandingPage({
  currentUserEmail,
}: {
  currentUserEmail: string | null | undefined;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-3">
      <h2 className="text-2xl">{process.env.NEXT_PUBLIC_BRAND_NAME}</h2>
      <p>{process.env.NEXT_PUBLIC_BRAND_DESC}</p>
      <div className="flex flex-row items-center justify-center gap-x-5">
        {currentUserEmail && (
          <Link href="/app">
            <Button>Go To App</Button>
          </Link>
        )}
        {!currentUserEmail && (
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
        )}
        {!currentUserEmail && (
          <Link href="/auth/signup">
            <Button>Signup</Button>
          </Link>
        )}
      </div>
      <div className="w-full">
        <StripePricingTable currentUserEmail={currentUserEmail} />
      </div>
    </div>
  );
}
