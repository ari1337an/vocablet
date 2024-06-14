import VocabularyBucketRepo from "@/server/database/repositories/vocabulary-bucket";

export default async function GetFlashcardBucketsListAction(userId: string) {
    try {
        // fetch user bucket lists
        const buckets = await VocabularyBucketRepo.findVocabularyBucketsByUserId(userId);
        return { success: true, buckets };
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
