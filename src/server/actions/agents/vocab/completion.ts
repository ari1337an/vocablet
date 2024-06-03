/**
 * This file contains the completion function for the general agent.
 *
 * Agent Action Function needs to follow the following criteria:
 * 1. It should use its respective system prompt {for extracting }
 * 2. It should deduct tokens from the users account (IMPORTANT)
 * 3. It should return the response like { success: true, message: "response", totalTokens: 100 } if everything is correct
 * 4. It should return the response line {success: false, message "error message"} if something goes wrong
 */

"use server";

import { z } from "zod";
import OpenAITextCompletion from "../openai-completion";
import { ConversationWithOutSystemPromptSchema } from "@/server/validation/openai/openai-messages";
import { C2_VOCAB_AGENT_SYSTEM_PROMPT } from "@/server/prompts/prompts";

export default async function VocabAgentCompletion(
    messages: z.infer<typeof ConversationWithOutSystemPromptSchema>,
) {
    try {

        // Get the last message from the messages array.
        const lastMessage = messages[messages.length - 1];

        // If the last message is not by the user, return an error.
        if (lastMessage.role !== "user") {
            throw new Error("The last message should be from the user.");
        }

        // Convert the lastMessage to ConversationWithOutSystemPromptSchema
        const valdiatedMessage =
            ConversationWithOutSystemPromptSchema.parse([lastMessage]);

        // Get completion from OpenAI
        const [reply, totalTokens] = await OpenAITextCompletion(
            valdiatedMessage,
            C2_VOCAB_AGENT_SYSTEM_PROMPT
        );
        if (!reply || !totalTokens) {
            throw new Error(
                "Failed to generate a response or calculate total tokens."
            );
        }

        // Post Validation of the response
        const response = JSON.parse(reply as string);
        if (!response || typeof response !== "object") {
            throw new Error("Invalid response format.");
        }
        
        // Extract the words and sentences.
        const { words, phrases,  enhanced_text } = response;
        if (!words || typeof words !== "object" || !enhanced_text || typeof enhanced_text !== "string") {
            throw new Error("Invalid response format.");
        }

        // traverse through the words and phrases and validate them


        // Return the validated response
        return {
            success: true,
            user_message: lastMessage.content,
            words: words,
            phrases: phrases,
            enhanced_text: enhanced_text,
            totalTokens: totalTokens,
        };
    } catch (error) {
        return {
            success: false,
            message: (error as Error).message,
        };
    }
}
