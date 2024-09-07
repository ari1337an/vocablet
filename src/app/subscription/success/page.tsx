"use client";
import MessageComponent from "@/app/_components/message/message";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function SuccessPaymentPage() {
  const router = useRouter();

  useEffect(() => {
    // setTimeout(() => {
    //   router.push("/app");
    // }, 5000);
  });

  return (
    <MessageComponent
      response={{
        success: true,
        message:
          "Congratulations! Your purchased was successfull.",
      }}
    />
  );
}
