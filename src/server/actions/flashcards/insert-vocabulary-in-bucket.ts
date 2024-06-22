import VocabularyRepo from "@/server/database/repositories/vocabulary";
import VocabularyBucketRepo from "@/server/database/repositories/vocabulary-bucket";

export default async function InsertVocabularyInBucketAction(bucketId: string, vocabulary: string) {
    try {
        // fetch vocabularies by bucket id
        const vocab = await VocabularyRepo.createVocabulary(
            bucketId,
            vocabulary,
            "phrase",
            "example sentence"
        );
        return { success: true, vocab };
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
