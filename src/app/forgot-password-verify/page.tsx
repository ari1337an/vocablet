import React from "react";
import VerifyEmail from "./_components/verify-email";
import { ReCaptchaProvider } from "next-recaptcha-v3";

type Props = {
  params?: {
    num?: string;
  };
  searchParams?: {
    code?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const code = searchParams?.code ?? null;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-xl">
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT}
        >
          <VerifyEmail code={code} />
        </ReCaptchaProvider>
      </div>
    </div>
  );
}
