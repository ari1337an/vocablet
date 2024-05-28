"use server";

import { Response } from "@/app/_components/message/message";
import { auth, signIn } from "@/server/authentication/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/server/authentication/routes";
import UserRepo from "@/server/database/repositories/user";
import VerificationRepo from "@/server/database/repositories/verification";

export default async function verifyTokenUseCase(token: string) {
  try {
    const session = await auth();
    if (!session) {
      throw new Error("You must be logged in!");
    }
    const userId = session.user.userId as string;

    // Use the "verification-token-credentials" to verify if the token is valid
    // It checks the expiration and matches the database record with token and userId
    // Also updates the JWT if the token is verified
    await signIn("verification-token-credential", {
      userId,
      token,
      redirect: false,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return {
      success: true,
      message: "Successfully verified email. Redirecting...",
      redirect: DEFAULT_LOGIN_REDIRECT,
      redirectTimeout: 5000,
    } as Response;
  } catch (error) {
    return {
      success: false,
      message: "Invalid or expired verification link!",
    } as Response;
  }
}
