import db from "@/server/database/db";

export default class VocabularyRepo {
    static findVocabularyById(vocabularyId: string) {
        return db.vocabulary.findUnique({
            where: { id: vocabularyId },
        });
    }

    static findVocabulariesByBucketId(bucketId: string) {
        return db.vocabulary.findMany({
            where: {
                bucketId: bucketId,
            },
        });
    }

    static createVocabulary(
        bucketId: string,
        wordOrPhrase: string,
        meaning: string ,
        exampleSentence: string
    ) {
        return db.vocabulary.create({
            data: {
                bucketId,
                wordOrPhrase,
                meaning,
                exampleSentence
            },
        });
    }
}
