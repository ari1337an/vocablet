import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import GetConversationTurnsAction from "@/server/actions/conversation/get-conversation-turns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Extract conversationId from the URL
    const url = new URL(request.url);
    const conversationId = url.pathname.split('/').pop() as string;

    const userId = await GetUserIdFromReq(request);
    if (!userId) {
      throw new Error("Unauthorized request.");
    }

    // Fetch user chat history
    const responseJson = await GetConversationTurnsAction(conversationId);

    // Return the completion response
    return NextResponse.json(responseJson, {
      status: responseJson.success ? 200 : 500,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}
