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
import TurnRepo from "@/server/database/repositories/turn";
import validateOrCreateConversation from "./validate-conversation-id";

export default async function GeneralAgentCompletion(
  userId: string,
  messages: z.infer<typeof ConversationWithOutSystemPromptSchema>,
  conversationId?: string,
  requestNewConversation?: boolean
) {
  try {
    // TODO: check if user have tokens to generate the response

    // Validate the conversation and get the current conversationId or create a new one if needed
    let conversationIdCurrent = await validateOrCreateConversation(
      userId,
      messages,
      conversationId,
      requestNewConversation
    );

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
    const turn = await TurnRepo.CreateTurnInDB(
      userId,
      conversationIdCurrent,
      messages[messages.length - 1].content,
      reply + "",
      totalTokens as number
    );
    if (!turn) {
      throw new Error("Failed to record the turn in the database.");
    }

    // Deduct tokens from the user's account
    await DeductTokenFromUserAccountForMessage(
      userId,
      turn.id,
      parseInt(totalTokens + "", 10)
    );

    return {
      success: true,
      message: reply,
      totalTokens: totalTokens,
      conversationId: conversationIdCurrent,
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    };
  }
}
