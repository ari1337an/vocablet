import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import GetConversationListAction from "@/server/actions/conversation/get-conversation-list";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const userId = await GetUserIdFromReq(request);
    if (!userId) {
      throw new Error("Unauthorized request.");
    }

    // fetch user chat history
    const responseJson = await GetConversationListAction(userId);

    // Return the completion response
    return Response.json(responseJson, {
      status: responseJson.success ? 200 : 500,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}
