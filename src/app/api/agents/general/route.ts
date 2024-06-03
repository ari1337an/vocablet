import GeneralAgentCompletion from "@/server/actions/agents/general/completion";
import VocabAgentCompletion from "@/server/actions/agents/vocab/completion";
import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const userId = await GetUserIdFromReq(request);
    if (!userId) {
      throw new Error("Unauthorized request.");
    }

    const body = await request.json();
    const messages = body.messages;
    const conversationId = body.conversationId;
    const requestNewConversation = body.requestNewConversation;
    const useVocabAgent = body.useVocabAgent ?? false;

    // Call the completion function
    const data = await GeneralAgentCompletion(
      userId,
      messages,
      conversationId,
      requestNewConversation
    );

    if (useVocabAgent) {
      const vocabData = await VocabAgentCompletion(messages);
      if (!vocabData.success)
        throw new Error(vocabData.message as string | "Vocabulary search error.");
      // Check if the completion function was successful
      if (!data.success)
        throw new Error(data.message as string | "Completion error.");

      // add the vocab data with data to be returned
      return Response.json(
        {
          ...data,
          ...vocabData,
        },
        {
          status: 200,
        }
      );
    }
    // Check if the completion function was successful
    if (!data.success)
      throw new Error(data.message as string | "Completion error.");

    // Return the completion response
    return Response.json(
      {
        ...data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}
