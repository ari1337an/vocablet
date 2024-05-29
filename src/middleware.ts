import NextAuth, { NextAuthConfig } from "next-auth";
import { authConfig } from "@/server/authentication/auth.config";

import {
  DEFAULT_LOGIN_REDIRECT,
  REQUEST_TO_LOGIN_ROUTE,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  publicAPIPrefixes,
  protectedAPIPrefixes,
} from "@/server/authentication/routes";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

const { auth } = NextAuth({
  trustHost: true,
  ...authConfig,
} as NextAuthConfig);

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

/**
 * This function is used to verify the token of the request
 * Returns true if the token is valid (i.e. The user is authorized to access the route)
 * Returns false if the token is invalid (i.e. The user is not authorized to access the route)
 * @param request
 * @returns
 */
async function RequestTokenVerify(request: NextRequest) {
  const token = await getToken({
    req: request,
    salt:
      process.env.ENVIRONEMENT === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token",
    secret: process.env.AUTH_SECRET as string,
  });
  if (!token) return false; // dont' let him pass
  return true; // let him pass
}

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicAPIPrefix = publicAPIPrefixes.some((prefix) => {
    return nextUrl.pathname.startsWith(prefix);
  });
  let isPublicRoute =
    publicRoutes.some((route) => matchRoute(route, nextUrl.pathname)) ||
    isPublicAPIPrefix;
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isProtectedApiRoute = protectedAPIPrefixes.some((prefix) => {
    return nextUrl.pathname.startsWith(prefix);
  });

  if (isApiAuthRoute) {
    return; // return means give access to the route
  }

  if (isProtectedApiRoute) {
    // if the user is logged in then let him pass
    if (isLoggedIn) return;

    // check the bearer token
    if (await RequestTokenVerify(req)) {
      return;
    } else {
      return Response.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }
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
