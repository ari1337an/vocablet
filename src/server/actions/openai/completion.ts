"use server";
import OpenAI from "openai";

interface Message {
  role: "system" | "user" | "assistant"; // Define possible roles
  content: string;
}

interface Messages {
  messages: Message[];
}

export default async function OpenAITextCompletion(
  messages: Messages,
  model: string = "gpt-3.5-turbo"
) {
  const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: messages.messages, // Pass the array of messages directly
    model,
  });

  return chatCompletion;
}
