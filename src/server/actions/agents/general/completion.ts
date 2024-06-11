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
import { PromptFactory } from "@/server/prompts/prompt-factory";
import DeductTokenFromUserAccountForMessage from "../../usage/token-deduction";
import TurnRepo from "@/server/database/repositories/turn";
import VocabAgentSuggestionRepo from "@/server/database/repositories/vocab-agent-suggestion";
import validateOrCreateConversation from "./validate-conversation-id";
import VocabAgentCompletion from "../vocab/completion";

export default async function GeneralAgentCompletion(
  userId: string,
  messages: z.infer<typeof ConversationWithOutSystemPromptSchema>,
  conversationId?: string,
  requestNewConversation?: boolean,
  useVocabAgent?: boolean
) {
  try {
    // TODO: check if user have tokens to generate the response
    // console.log(messages);
    // Validate the conversation and get the current conversationId or create a new one if needed
    let conversation = await validateOrCreateConversation(
      userId,
      messages,
      conversationId,
      requestNewConversation
    );
    let conversationIdCurrent = conversation.id;
    let system_prompt = PromptFactory.getDefaultSystemPrompt();
    // console.log(system_prompt);
    // Get completion from OpenAI

    // filter the messages to remove the messages with 'agents' role
    // messages = messages.filter((msg) => msg.role !== "agent");

    const [reply, totalTokens] = await OpenAITextCompletion(
      messages,
      system_prompt,
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


    if (useVocabAgent) {
      const vocabData = await VocabAgentCompletion(messages);
      if (!vocabData.success)
        throw new Error(vocabData.message as string | "Vocabulary search error.");
      // Check if the completion function was successful

      // add to the database VocabAgentSuggestion
      const vocabAgentSuggestion = await VocabAgentSuggestionRepo.createVocabAgentSuggestion(
        turn.id,
        vocabData.totalTokens as number,
        messages[messages.length - 1].content,
        vocabData.words,
        vocabData.phrases
      );
      return {
        success: true,
        message: reply,
        totalTokens: totalTokens,
        conversationId: conversationIdCurrent,
        title: conversation.title,
        createdAt: conversation.createdAt,
        vocab_agent_response: vocabData,
      }
    }


    return {
      success: true,
      message: reply,
      totalTokens: totalTokens,
      conversationId: conversationIdCurrent,
      title: conversation.title,
      createdAt: conversation.createdAt,
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    };
  }
}
