"use client";

import { Button } from "@/app/_components/ui/button";
import ExclamationBlueIcon from "@/app/_icons/exclamation-blue";
import SignOutUseCase from "@/server/actions/auth/logout-usecase";
import resendVerificationLinkUseCase from "@/server/actions/email/resend-verification-link-usecase";
import { REQUEST_TO_LOGIN_ROUTE } from "@/server/authentication/routes";
import React, { useTransition } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RequestEmailVerification() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const recheck = () => {
    // refresh the page to check if the user has verified their email
    router.refresh();
  };

  const resend = () => {
    startTransition(() => {
      resendVerificationLinkUseCase()
        .then((response) => {
          if (response.success) {
            toast.success("Email verification link has been resent.", {
              id: "0",
            });
          } else {
            toast.error(response.message, { id: "1" });
          }
        })
        .catch((error) => {
          toast.error(error.message, { id: "2" });
        });
    });
  };

  const logout = () => {
    startTransition(() => {
      SignOutUseCase(REQUEST_TO_LOGIN_ROUTE);
    });
  };

  return (
    <main className="min-h-screen bg-secondary flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <ExclamationBlueIcon className="w-16 h-16 " />
        <h1 className="text-3xl font-bold text-center">Verify your email</h1>
        <p className="text-center">
          We have sent you an email with a link to verify your account. Please
          check your inbox and click the link to verify your email.
        </p>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <Button
            onClick={() => recheck()}
            className="bg-sky-700 hover:bg-sky-800"
          >
            I have verified
          </Button>
          <Button disabled={isPending} onClick={() => resend()}>
            Resend email
          </Button>
        </div>
        <div>
          <Button
            disabled={isPending}
            variant="ghost"
            className="underline"
            onClick={() => logout()}
          >
            Logout
          </Button>
        </div>
      </div>
    </main>
  );
}
