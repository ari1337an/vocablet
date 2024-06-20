import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import CreateVocabularyBucketAction from "@/server/actions/flashcards/create-vocabulary-bucket";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }

        const body = await request.json();
        const title = body.title;

        // fetch user bucket lists
        const responseJson = await CreateVocabularyBucketAction(userId, title);
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
