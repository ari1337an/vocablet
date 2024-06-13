import VocabularyRepo from "@/server/database/repositories/vocabulary";

export default async function GetFlashcardVocabulariesAction(bucketId: string) {
    try {
        // fetch user chat history
        const flashcards = await VocabularyRepo.findVocabulariesByBucketId(bucketId);
        return { success: true, flashcards };
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
