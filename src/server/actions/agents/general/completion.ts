"use server";

import OpenAITextCompletion from "../../openai/completion";

export default async function GeneralAgentCompletion(query: string) {

  // get completion
  const response = await OpenAITextCompletion({
    messages: [
      {
        role: "user",
        content: query,
      },
    ],
  });

  const message = response.choices[0].message.content;
  const totalTokens = response.usage?.total_tokens; // make sure to deduct this from the user's token balance
  
  return {
    success: true,
    message: message,
  };
}
