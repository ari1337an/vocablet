import VocabularyRepo from "@/server/database/repositories/vocabulary";
import VocabularyBucketRepo from "@/server/database/repositories/vocabulary-bucket";

export default async function CreateVocabularyBucketAction(userId: string, title: string) {
    try {
        // fetch vocabularies by bucket id
        const bucket = await VocabularyBucketRepo.createVocabularyBucket(userId, title);
        return { success: true, bucket };
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
