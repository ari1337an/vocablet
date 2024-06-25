import VocabularyRepo from "@/server/database/repositories/vocabulary";
import VocabularyBucketRepo from "@/server/database/repositories/vocabulary-bucket";

export default async function UpdateVocabularyBucketNameAction(bucketId: string, title: string) {
    try {
        const bucket = await VocabularyBucketRepo.updateVocabularyBucketName(bucketId, title);
        return { success: true, bucket };
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
