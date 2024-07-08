"use server";

import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export default async function GetUserIdFromReq(
  request: NextRequest
): Promise<string | null> {
  const token = await getToken({
    req: request,
    secureCookie: process.env.ENVIRONEMENT === "production",
    salt:
      process.env.ENVIRONEMENT === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token",
    secret: process.env.AUTH_SECRET as string,
  });
  return token?.userId as string | null;
}
