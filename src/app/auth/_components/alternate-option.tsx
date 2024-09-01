"use client";

import React from "react";
import { matchRoute } from "@/middleware";
import {
  REQUEST_TO_FORGOT_PASS,
  REQUEST_TO_LOGIN_ROUTE,
  REQUEST_TO_SIGNUP_ROUTE,
} from "@/server/authentication/routes";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import LeftArrowIcon from "@/app/_icons/left-arrow";

export default function AlternateOption() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const isLoginRoute = matchRoute(REQUEST_TO_LOGIN_ROUTE, pathname);
  const isForgotRoute = matchRoute(REQUEST_TO_FORGOT_PASS, pathname);

  const getHref = (baseRoute: string) => {
    if (callbackUrl) {
      return `${baseRoute}?callbackUrl=${encodeURIComponent(callbackUrl)}`;
    }
    return baseRoute;
  };
  console.log({ isForgotRoute });
  if (isForgotRoute) {
    return (
      <div className="text-center mt-2 flex flex-row items-center justify-center gap-x-2">
        <LeftArrowIcon className="h-5 w-5 fill-white" />
        <Link
          className="hover:underline"
          href={getHref(REQUEST_TO_LOGIN_ROUTE)}
        >
          Back to login
        </Link>
      </div>
    );
  } else if (isLoginRoute) {
    return (
      <div className="text-center mt-2">
        <Link
          className="hover:underline"
          href={getHref(REQUEST_TO_SIGNUP_ROUTE)}
        >
          Don&apos;t have an account?
        </Link>
      </div>
    );
  } else {
    return (
      <div className="text-center mt-2">
        <Link
          className="hover:underline"
          href={getHref(REQUEST_TO_LOGIN_ROUTE)}
        >
          Already have an account?
        </Link>
      </div>
    );
  }
}
