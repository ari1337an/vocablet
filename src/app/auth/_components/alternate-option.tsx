"use client";

import React from "react";
import { matchRoute } from "@/middleware";
import {
  REQUEST_TO_LOGIN_ROUTE,
  REQUEST_TO_SIGNUP_ROUTE,
} from "@/server/authentication/routes";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AlternateOption() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const isLoginRoute = matchRoute(REQUEST_TO_LOGIN_ROUTE, pathname);

  const getHref = (baseRoute: string) => {
    if (callbackUrl) {
      return `${baseRoute}?callbackUrl=${encodeURIComponent(callbackUrl)}`;
    }
    return baseRoute;
  };

  if (isLoginRoute) {
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
