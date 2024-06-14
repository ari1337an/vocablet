import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import GetFlashcardBucketsListAction from "@/server/actions/flashcards/get-vocabulary-buckets-list";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }

        // fetch user bucket lists
        const responseJson = await GetFlashcardBucketsListAction(userId);
        console.log(responseJson)

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
