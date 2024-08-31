"use server";
import { ConversationWithOutSystemPromptSchema } from "@/server/validation/openai/openai-messages";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { z } from "zod";
import { encodingForModel, TiktokenModel } from "js-tiktoken";

const CountTokens = async (text: string, model: string = "gpt-4o-mini") => {
  const encoding = encodingForModel(model as TiktokenModel); // for gpt-4o-mini
  const tokens = encoding.encode(text);
  return tokens.length;
};

export default async function OpenAITextCompletion(
  messages: z.infer<typeof ConversationWithOutSystemPromptSchema>,
  systemPrompt: string = `Your name is ${process.env.NEXT_PUBLIC_BRAND_NAME} AI. You're a helpful assistant.`,
  model: string = "gpt-4o-mini"
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

  // Check Input token limit
  let last_text: string =
    messagesWithSystemPrompt[messagesWithSystemPrompt.length - 1].content;
  const last_input_token = await CountTokens(last_text);
  if (last_input_token > 500) {
    throw new Error(
      "Please reduce the length of your queries. Vocablet enforces limits under its Fair Usage Policy (FUP) for the Vocablet Community."
    );
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: messagesWithSystemPrompt as ChatCompletionMessageParam[],
    model,
  });

  return [
    chatCompletion.choices[0].message.content,
    chatCompletion.usage?.total_tokens as number, // total tokens = input tokens + output tokens
    chatCompletion.usage?.completion_tokens as number, // output tokens
  ];
}
