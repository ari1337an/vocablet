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
import { checkEntitlement, EntitlementSlugs } from "../../entitlement/check-entitlement";

export default async function MeaningAgentCompletion(
    userId: string,
    messages: z.infer<typeof ConversationWithOutSystemPromptSchema>,
) {
    try {
        // TODO: check if user have tokens to generate the response

        // Get the last message from the messages array.
        const lastMessage = messages[messages.length - 1];
        let promptMessageMeaning = `Give me the meaning, part of speech, and an example sentence for the word "${lastMessage.content}"`;
        
        const hasMeaningAgentAccess = await checkEntitlement(userId, EntitlementSlugs.VOCABLET_MEANING_AGENT);
        // console.log('checkEntitlement', hasMeaningAgentAccess);
        if(!hasMeaningAgentAccess){
            return {
                success: false,
                message: "You do not have access to use this feature. Upgrade your plan to use this feature.",
            };
        }

        const meaningInput = {
            role: lastMessage.role,
            content: promptMessageMeaning,
        };

        // If the last message is not by the user, return an error.
        if (meaningInput.role !== "user") {
            throw new Error("The last message should be from the user.");
        }
        // Convert the lastMessage to ConversationWithOutSystemPromptSchema
        const validatedWordSuggestMessage =
            ConversationWithOutSystemPromptSchema.parse([meaningInput]);

        let system_prompt = PromptFactory.getMeaningAgentSystemPrompt();


        const [reply, totalTokens] = await OpenAITextCompletion(
            validatedWordSuggestMessage,
            system_prompt,
        );

        if (!reply) {
            throw new Error(
                "Failed to generate a response."
            );
        }


        return {
            success: true,
            meaningOutput: reply,
        };
    } catch (error) {
        return {
            success: false,
            message: (error as Error).message,
        };
    }
}
