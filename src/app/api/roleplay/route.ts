import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import CreateRoleplayAction from "@/server/actions/roleplay/create-roleplay";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }


        const body = await request.json();
        const title = body.title;
        const assistantRole = body.assistantRole;
        const userRole = body.userRole;
        const conversationTone = body.conversationTone;
        const conversationContext = body.conversationContext;

        // fetch user chat history
        const responseJson = await CreateRoleplayAction(userId, title, assistantRole, userRole, conversationTone, conversationContext);

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
