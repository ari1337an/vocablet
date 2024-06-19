import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import GetFlashcardVocabulariesAction from "@/server/actions/flashcards/get-vocabulary-list";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        // Extract bucketId from the URL
        const url = new URL(request.url);
        const bucketId = url.pathname.split('/').pop() as string;

        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }

        // Fetch the flashcard vocabularies
        const responseJson = await GetFlashcardVocabulariesAction(bucketId);

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
