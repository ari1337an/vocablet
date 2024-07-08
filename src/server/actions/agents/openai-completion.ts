"use server";
import { ConversationWithOutSystemPromptSchema } from "@/server/validation/openai/openai-messages";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { z } from "zod";

export default async function OpenAITextCompletion(
  messages: z.infer<typeof ConversationWithOutSystemPromptSchema>,
  systemPrompt: string = `Your name is ${process.env.NEXT_PUBLIC_BRAND_NAME} AI. You're a helpful assistant.`,
  model: string = "gpt-3.5-turbo"
) {
  const validatedMessages =
    ConversationWithOutSystemPromptSchema.parse(messages);

  // add system prompt to the first
  const messagesWithSystemPrompt = [
    {
      role: "system",
      content: systemPrompt,
    },
    ...validatedMessages,
  ];

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: messagesWithSystemPrompt as ChatCompletionMessageParam[],
    model,
  });

  return [
    chatCompletion.choices[0].message.content,
    chatCompletion.usage?.total_tokens,
  ];
}
