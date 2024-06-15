
import VocabularyBucketRepo from "@/server/database/repositories/vocabulary-bucket";

export default async function GetFlashcardVocabulariesAction(bucketId: string) {
    try {
        // fetch vocabularies by bucket id
        const bucket = await VocabularyBucketRepo.findVocabulariesByBucketId(bucketId);
        return { success: true, bucket };
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
