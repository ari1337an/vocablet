import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import DeleteVocabularyAction from "@/server/actions/flashcards/delete-vocabulary-from-bucket";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    try {
        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }

        // Extract vocabularyId from the URL
        const url = new URL(request.url);
        const vocabularyId = url.pathname.split('/').pop() as string;

        // fetch user bucket lists
        const responseJson = await DeleteVocabularyAction(vocabularyId);
        // console.log(responseJson)

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
