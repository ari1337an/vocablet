
import VocabularyBucketRepo from "@/server/database/repositories/vocabulary-bucket";

export default async function DeleteVocabularyBucketAction(bucketId: string) {
    try {
        const bucket = await VocabularyBucketRepo.deleteVocabularyBucket(bucketId);
        return { success: true, bucket };
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
