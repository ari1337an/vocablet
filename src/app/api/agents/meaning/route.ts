import GeneralAgentCompletion from "@/server/actions/agents/general/completion";
import MeaningAgentCompletion from "@/server/actions/agents/meaning/completion";
import VocabAgentCompletion from "@/server/actions/agents/vocab/completion";
import WordSuggesterCompletion from "@/server/actions/agents/word-suggest/completion";
import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        //TODO
        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }

        const body = await request.json();
        const messages = body.messages;

        // Call the completion function
        const data = await MeaningAgentCompletion(
            userId,
            messages
        );

        // Check if the completion function was successful
        if (!data.success){
            return Response.json({success: false, message: data.message as string | "Completion error."}, {status: 200});
        }

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
