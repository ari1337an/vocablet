import NextAuth from "next-auth";
import { authConfig } from "@/server/authentication/auth.config";

import {
  DEFAULT_LOGIN_REDIRECT,
  REQUEST_TO_LOGIN_ROUTE,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  publicAPIRoutes,
} from "@/server/authentication/routes";

const { auth } = NextAuth({
  trustHost: true,
  ...authConfig,
});

export function matchRoute(route: string, pathname: string) {
  const routeParts = route.split("/").filter((part) => part !== ""); // Split the route into parts
  const pathParts = pathname.split("/").filter((part) => part !== ""); // Split the pathname into parts

  if (routeParts.length !== pathParts.length) {
    return false; // If lengths are different, routes don't match
  }

  for (let i = 0; i < routeParts.length; i++) {
    if (
      routeParts[i] !== pathParts[i] &&
      !routeParts[i].startsWith("[") &&
      !routeParts[i].endsWith("]")
    ) {
      return false; // If parts don't match and it's not a dynamic part, routes don't match
    }
  }

  return true; // If all parts match, routes match
}

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicAPIRoutes = publicAPIRoutes.some((route) =>
    matchRoute(route, nextUrl.pathname)
  );
  let isPublicRoute =
    publicRoutes.some((route) => matchRoute(route, nextUrl.pathname)) ||
    isPublicAPIRoutes;
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return; // return means give access to the route
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    // Extract the href of the current URL
    const currentUrlString = nextUrl.href;

    // Create a new URL object for the login route
    const loginUrl = new URL(REQUEST_TO_LOGIN_ROUTE, nextUrl.origin);

    // Append the current URL as a query parameter named 'callbackUrl'
    loginUrl.searchParams.append("callbackUrl", currentUrlString);

    return Response.redirect(new URL(loginUrl));
  }

  return;
});

// match every single route, so this middleware will be executed on every request
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
