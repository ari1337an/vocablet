import ConversationRepo from "@/server/database/repositories/conversation";
import { ConversationWithOutSystemPromptSchema } from "@/server/validation/openai/openai-messages";
import { z } from "zod";

/**
 * Validates or creates a conversation based on the provided parameters.
 *
 * @param userId - The ID of the user.
 * @param messages - The messages to be used for the title of conversation.
 * @param conversationId - The ID of the existing conversation (optional).
 * @param requestNewConversation - Flag indicating whether to request a new conversation (optional).
 * @returns The conversation ID.
 * @throws Will throw an error if the validation fails or if a new conversation cannot be created.
 */
export default async function validateOrCreateConversation(
  userId: string,
  messages: z.infer<typeof ConversationWithOutSystemPromptSchema>,
  conversationId?: string,
  requestNewConversation?: boolean
) {
  if (!conversationId && !requestNewConversation) {
    throw new Error(
      "Invalid conversation id. Please request a new conversation."
    );
  } else if (conversationId && requestNewConversation) {
    throw new Error(
      "Invalid request. Please provide a valid conversation id or request a new conversation."
    );
  } else if (!conversationId && requestNewConversation) {
    const valdiatedMessage =
      ConversationWithOutSystemPromptSchema.parse(messages);

    // generate title from messages
    // TODO: Implement a better way to generate the title
    const title = valdiatedMessage[0].content.trim().slice(0, 50);

    // Create a new conversation
    const conversation = await ConversationRepo.CreateNewConversation(
      userId,
      title
    );
    if (!conversation) throw new Error("Failed to create a new conversation.");

    return conversation;
  } else {
    // Validate conversation ownership
    const conversation =
      await ConversationRepo.GetConversationByUserIdAndConversationId(
        userId,
        conversationId as string
      );

    if (!conversation) {
      throw new Error(
        "Invalid conversation id. Please request a new conversation."
      );
    }

    return conversation;
  }
}
