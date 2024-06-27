// TODOimport GeneralAgentCompletion from "@/server/actions/agents/general/completion";
import RoleplayAgentCompletion from "@/server/actions/agents/roleplay/complete";
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

        const assistant_role = body.assistant_role;
        const user_role = body.user_role;
        const conversation_tone = body.conversation_tone;
        const conversation_context = body.conversation_context;

        // filter out the messages with 'agents' role
        const filteredMessages = messages.filter((msg: any) => msg.role !== "agent");

        // Call the completion function
        const data = await RoleplayAgentCompletion(
            userId,
            assistant_role,
            user_role,
            conversation_tone,
            conversation_context,
            filteredMessages,
            conversationId,
            requestNewConversation,
            useVocabAgent
        );

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
