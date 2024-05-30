import GeneralAgentCompletion from "@/server/actions/agents/general/completion";
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

    // Call the completion function
    const data = await GeneralAgentCompletion(userId, conversationId, messages);

    // Check if the completion function was successful
    if (!data.success)
      throw new Error(data.message as string | "Completion error.");

    // Return the completion response
    return Response.json(
      { success: true, message: data.message },
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
