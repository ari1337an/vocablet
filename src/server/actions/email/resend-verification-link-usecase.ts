"use server";

import { auth } from "@/server/authentication/auth";
import sendVerificationLinkUseCase from "./send-verification-link-usecase";

export default async function resendVerificationLinkUseCase() {
  try {
    // check authentication
    const session = await auth();
    if (!session || !session.user || !session.user.email)
      throw new Error("You are not logged in!");
    const { email, userId } = session.user;

    const response = await sendVerificationLinkUseCase(email, userId);

    return response;
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Failed to send verification link",
    };
  }
}
