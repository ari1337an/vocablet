"use server";

import SubscriptionRepo from "@/server/database/repositories/subscription";

export default async function recordOneMessageUseInDBForUser(userId: string) {
  try {
    const message_remaining = await SubscriptionRepo.getMessageRemainingCountByUserId(userId);
    if(message_remaining > 0){
      await SubscriptionRepo.recordOneMessageUseInDBForUser(userId);
    }else{
      throw new Error("You have insufficient messages in your subscription. Kindly upgrade your package.");
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
