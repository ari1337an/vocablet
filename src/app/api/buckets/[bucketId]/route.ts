import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import GetFlashcardVocabulariesAction from "@/server/actions/flashcards/get-vocabulary-list";
import InsertVocabularyInBucketAction from "@/server/actions/flashcards/insert-vocabulary-in-bucket";
import DeleteVocabularyBucketAction from "@/server/actions/flashcards/delete-vocabulary-bucket";
import UpdateVocabularyBucketNameAction from "@/server/actions/flashcards/update-vocabulary-bucket-name";
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

export async function POST(request: NextRequest) {
    try {
        // Extract bucketId from the URL
        const url = new URL(request.url);
        const bucketId = url.pathname.split('/').pop() as string;

        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }

        const body = await request.json();
        const vocabularies = body.vocabularies;

        const responseJsonArray = [];
        for (const vocabulary of vocabularies) {
            const responseJson = await InsertVocabularyInBucketAction(bucketId, vocabulary);
            responseJsonArray.push(responseJson);
        }

        // Return the completion response
        return NextResponse.json({ success: true, vocabularies: responseJsonArray }, {
            status: 200,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: (error as Error).message },
            { status: 500 }
        );
    }
}
export async function PATCH(request: NextRequest) {
    try {
        // Extract bucketId from the URL
        const url = new URL(request.url);
        const bucketId = url.pathname.split('/').pop() as string;

        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }

        const body = await request.json();
        const updatedName = body.updatedName;
        const responseJson = await UpdateVocabularyBucketNameAction(bucketId, updatedName);

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
export async function DELETE(request: NextRequest) {
    try {
        // Extract bucketId from the URL
        const url = new URL(request.url);
        const bucketId = url.pathname.split('/').pop() as string;

        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }
        
        const responseJson = await DeleteVocabularyBucketAction(bucketId);

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
