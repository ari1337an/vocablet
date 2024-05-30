/**
 * This file contains the completion function for the general agent.
 *
 * Agent Action Function needs to follow the following criteria:
 * 1. It should use its respective system prompt
 * 2. It should deduct tokens from the users account (IMPORTANT)
 * 3. It should return the response like { success: true, message: "response", totalTokens: 100 } if everything is correct
 * 4. It should return the response line {success: false, message "error message"} if something goes wrong
 */

"use server";

import { z } from "zod";
import OpenAITextCompletion from "../openai-completion";
import { ConversationWithOutSystemPromptSchema } from "@/server/validation/openai/openai-messages";
import { GENERAL_AGENT_SYSTEM_PROMPT } from "@/server/prompts/prompts";
import DeductTokenFromUserAccountForMessage from "../../usage/token-deduction";
import ConversationRepo from "@/server/database/repositories/conversation";
import TurnRepo from "@/server/database/repositories/message";

export default async function GeneralAgentCompletion(
  userId: string,
  conversationId: string,
  messages: z.infer<typeof ConversationWithOutSystemPromptSchema>
) {
  try {
    // Validate the last message role
    if (messages[messages.length - 1].role !== "user") {
      throw new Error("Last message should be user message.");
    }

    // Validate conversation ownership
    const isConversationOwner =
      await ConversationRepo.matchConversationOwnership(userId, conversationId);
    if (!isConversationOwner) {
      throw new Error(
        "Invalid conversation id. Please start a new conversation."
      );
    }

    // Get completion from OpenAI
    const [reply, totalTokens] = await OpenAITextCompletion(
      messages,
      GENERAL_AGENT_SYSTEM_PROMPT
    );
    if (!reply || !totalTokens) {
      throw new Error(
        "Failed to generate a response or calculate total tokens."
      );
    }

    // Record the turn in the database
    const turnId = await TurnRepo.RecordTurnInDB(
      userId,
      conversationId,
      messages[messages.length - 1].content,
      reply + ""
    );
    if (!turnId) {
      throw new Error("Failed to record the turn in the database.");
    }

    // Deduct tokens from the user's account
    const tokensDeducted = await DeductTokenFromUserAccountForMessage(
      userId,
      turnId,
      parseInt(totalTokens + "", 10)
    );
    if (!tokensDeducted) {
      throw new Error("Failed to deduct tokens from user's account.");
    }

    return {
      success: true,
      message: reply,
      totalTokens: totalTokens,
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    };
  }
}
