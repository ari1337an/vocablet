import VerificationRepo from "@/server/database/repositories/verification";

export default async function checkRateLimit(userId: string) {
  // check rate limit
  const lastRequest = await VerificationRepo.findVerificationByUserId(
    userId
  );
  if (lastRequest) {
    const now = new Date();
    const diff =
      now.getTime() - (lastRequest.expires.getTime() - 1000 * 60 * 60 * 24);

    // if less than 5 minutes, throw error
    if (diff < 1000 * 60 * 5) {
      throw new Error(
        "Please wait 5 minutes before requesting a new verification link!"
      );
    }
  }
}
