import GeneralAgentCompletion from "@/server/actions/agents/general/completion";
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
        // const prompt = 'Provide minimum 12 advanced & unique vocabularies based the the scenario delimited by """.'
        // Wrap user messages with triple quotation marks
        // const wrappedMessages = messages.map((message: { role: string, content: string }) => ({
        //     role: message.role,
        //     content: `${prompt}\n"""${message.content}"""`,
        // }));
        
        // console.log('wrappedMessages', wrappedMessages);
        // Call the completion function
        const data = await WordSuggesterCompletion(
            userId,
            messages
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
