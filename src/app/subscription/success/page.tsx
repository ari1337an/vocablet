"use client";

import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import getCheckoutDetails from "@/server/actions/stripe/get-checkout-details"; // Import server action
import { sendGTMEvent } from "@next/third-parties/google";
import CheckGreenIcon from "@/app/_icons/check-green";
import Link from "next/link";

export default function SuccessPaymentPage() {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [progress, setProgress] = useState<number>(33);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCheckoutDetails = async () => {
      const session_id = searchParams.get("session_id");
      if (!session_id) return;

      try {
        setProgress(50); // Start loading
        const result = await getCheckoutDetails(session_id); // Call server action
        setProgress(70); // Mid-progress on data retrieval
        console.log(result)
        if (result.success) {
          sendGTMEvent({
            event: "purchase",
            ecommerce: {
              value: result.value,
              currency: result.currency,
              transactionId: session_id,
            },
          });
          setProgress(100); // Complete progress
        } else {
          setError(result.message || "Failed to fetch checkout details.");
          setProgress(0); // Reset progress on failure
        }
      } catch (err) {
        setError("An error occurred while fetching the details.");
        setProgress(0); // Reset progress on error
      }
    };

    startTransition(() => {
      fetchCheckoutDetails();
    });
  }, [searchParams]);

  return (
    <main className="min-h-screen flex flex-row items-center justify-center bg-secondary">
      <div className="flex flex-col gap-y-5 items-center justify-center">
        <CheckGreenIcon className="w-10 h-10" />
        <p>Congratulations! Payment was successful.</p>
        <Link className="bg-primary rounded-lg px-4 py-2" href="/app">
          Go to App
        </Link>
      </div>
    </main>
  );
}
