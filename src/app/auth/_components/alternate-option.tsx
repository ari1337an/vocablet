import React from "react";
import { matchRoute } from "@/middleware";
import {
  REQUEST_TO_LOGIN_ROUTE,
  REQUEST_TO_SIGNUP_ROUTE,
} from "@/server/authentication/routes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";

export default function AlternateOption() {
  const pathname = usePathname();
  const isLoginRoute = matchRoute(REQUEST_TO_LOGIN_ROUTE, pathname);
  if (isLoginRoute) {
    return (
      <div className="text-center mt-2">
        <Link className="hover:underline" href={REQUEST_TO_SIGNUP_ROUTE}>
          Don&apos;t have an account?
        </Link>
      </div>
    );
  } else {
    return (
      <div className="text-center mt-2">
        <Link className="hover:underline" href={REQUEST_TO_LOGIN_ROUTE}>
          Already have an account?
        </Link>
      </div>
    );
  }
}
