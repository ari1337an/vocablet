"use server";

import VerificationRepo from "@/server/database/repositories/verification";
import sendVerificationLink from "./send-verification-link";
import { auth } from "@/server/authentication/auth";
import checkRateLimit from "./check-rate-limit";

export default async function sendVerificationLinkUseCase(email: string, userId: string) {
  try {
    // check rate limit
    await checkRateLimit(userId); // throws error if rate limit exceeded

    // delete any existing verification tokens
    await VerificationRepo.deleteVerificationToken(userId);

    // send verification link
    await sendVerificationLink(email, userId);

    return { success: true, message: "Verification link sent!" };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Failed to send verification link",
    };
  }
}
