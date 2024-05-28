"use client";
import MessageComponent from "@/app/_components/message/message";
import { useRouter } from "next/navigation";
import React from "react";

export default function CancelledPaymentPage() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/subscription");
  }, 2000);
  return (
    <MessageComponent
      response={{
        success: false,
        message: "You have cancelled the subscription! Redirecting...",
      }}
    />
  );
}
