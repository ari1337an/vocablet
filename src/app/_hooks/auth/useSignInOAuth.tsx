"use client";

import { signIn as signInFunction } from "next-auth/react";
import { useSignInCallbackUrl } from "./useSignInCallbackUrl";

interface useSignInProps {
  provider: "github" | "google";
  authorizationParams?:
    | string
    | string[][]
    | Record<string, string>
    | URLSearchParams;
}

export function useSignIn(
  provider: useSignInProps["provider"],
  authorizationParams?: useSignInProps["authorizationParams"]
) {
  const callbackUrl = useSignInCallbackUrl();

  // Create the signIn function
  const signIn = async () => {
    await signInFunction(provider, { callbackUrl }, authorizationParams);
  };

  return signIn;
}
