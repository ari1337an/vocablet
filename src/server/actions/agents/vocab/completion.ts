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
import { PromptFactory } from "@/server/prompts/prompt-factory";
import UserRepo from "@/server/database/repositories/user";
import WordSuggesterCompletion from "../word-suggest/completion";

export default async function VocabAgentCompletion(
    userId: string,
    messages: z.infer<typeof ConversationWithOutSystemPromptSchema>,
) {
    try {

        // Get the last message from the messages array.
        // const temp_messages = messages;
        const lastMessage = messages[messages.length - 1];
        // add the text 'provide advanced english words, phrases and enhanced text for the following sentence' to the last message
        const promptedMessage = `provide advanced english enhanced text for the following sentence in json format \n'${lastMessage.content}'`;

        const input = {
            role: lastMessage.role,
            content: promptedMessage,
        };

        // If the last message is not by the user, return an error.
        if (input.role !== "user") {
            throw new Error("The last message should be from the user.");
        }

        // Convert the lastMessage to ConversationWithOutSystemPromptSchema
        const valdiatedMessage =
            ConversationWithOutSystemPromptSchema.parse([input]);

        // Get completion from OpenAI
        const [reply, totalTokens] = await OpenAITextCompletion(
            valdiatedMessage,
            PromptFactory.getVocabSystemPrompt(),
        );
        if (!reply || !totalTokens) {
            throw new Error(
                "Failed to generate a response or calculate total tokens."
            );
        }
        // console.log('message: ', messages);
        const wordSuggestAgentResponse = await WordSuggesterCompletion(userId, messages);
        const {words} = wordSuggestAgentResponse;
        // console.log('words', words);
        // Post Validation of the response
        let response;
        const temp_reply = reply as string;
        if (temp_reply.startsWith("```json") && temp_reply.endsWith("```")) {
            const jsonBody = temp_reply.slice(7, -3);
            response = JSON.parse(jsonBody);
        } else {
            response = JSON.parse(temp_reply as string);
        }
        if (!response || typeof response !== "object") {
            throw new Error("Invalid response format.");
        }

        // Extract the words and sentences.
        const { enhanced_text } = response;
        if (!enhanced_text || typeof enhanced_text !== "string") {
            throw new Error("Invalid response format.");
        }

        // TODO: Deduct tokens

        // Return the validated response
        return {
            success: true,
            enhanced_text: enhanced_text,
            words: words,
            totalTokens: totalTokens,
        };
    } catch (error) {
        return {
            success: false,
            message: (error as Error).message,
        };
    }
}
