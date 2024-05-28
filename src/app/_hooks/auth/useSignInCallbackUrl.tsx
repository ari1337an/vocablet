"use client";

import { DEFAULT_LOGIN_REDIRECT } from "@/server/authentication/routes";
import { useSearchParams } from "next/navigation";

export function useSignInCallbackUrl() {
  const searchParams = useSearchParams();
  const callbackUrl =
    searchParams.get("callbackUrl") === null
      ? DEFAULT_LOGIN_REDIRECT
      : (searchParams.get("callbackUrl") as string);

  return callbackUrl as string;
}
