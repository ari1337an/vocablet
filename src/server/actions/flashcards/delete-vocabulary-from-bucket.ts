import VocabularyRepo from "@/server/database/repositories/vocabulary";
// import VocabularyBucketRepo from "@/server/database/repositories/vocabulary-bucket";

export default async function DeleteVocabularyAction(vocabularyId: string) {
    try {
        // fetch vocabularies by bucket id
        const vocabularyDeleteResponse = await VocabularyRepo.deleteVocabulary(vocabularyId);
        return { success: true, vocabularyDeleteResponse };
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
