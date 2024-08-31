"use server";

import SubscriptionRepo from "@/server/database/repositories/subscription";

export default async function recordOneMessageUseInDBForUser(
  userId: string,
  outputTokensCnt: number = 1 
) {
  try {
    const incrementBy =
      Math.ceil((outputTokensCnt ?? 0) / 500) || 1;

    const message_remaining =
      await SubscriptionRepo.getMessageRemainingCountByUserId(userId);
    if (message_remaining > 0) {
      await SubscriptionRepo.recordNMessageUseInDBForUser(userId, incrementBy);
    } else {
      throw new Error(
        "You have insufficient messages in your subscription. Kindly upgrade your package."
      );
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
