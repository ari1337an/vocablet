import { z } from "zod";

export const MessageSchema = z.object({
  role: z.enum(["system", "assistant", "user"]),
  content: z.string().min(1),
});

export const ConversationSchema = z
  .array(MessageSchema, {
    message: "Conversation must be an array of messages.",
  })
  .refine(
    (messages) => messages.filter((msg) => msg.role === "system").length <= 1,
    {
      message: "There can be only one system message.",
    }
  )
  .refine((messages) => messages[messages.length - 1].role === "user", {
    message: "The last message must be from the user.",
  });

// edit this and check if the last prompt is from the user
export const ConversationWithOutSystemPromptSchema = ConversationSchema.refine(
  (messages) => {
    return messages.filter((msg) => msg.role === "system").length === 0;
  }
);
