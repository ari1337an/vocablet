import db from "@/server/database/db";

export default class VocabularyBucketRepo {
    static findVocabularyBucketById(bucketId: string) {
        return db.vocabularyBucket.findUnique({
            where: { id: bucketId },
        });
    }
    static findVocabulariesByBucketId(bucketId: string) {
        return db.vocabularyBucket.findUnique({
            where: { id: bucketId },
            include: {
                Vocabulary: true,
            },
        });
    }

    static findVocabularyBucketsByUserId(userId: string) {
        return db.vocabularyBucket.findMany({
            where: {
                userId: userId,
            },
        });
    }

    static createVocabularyBucket(
        userId: string,
        title: string,
    ) {
        return db.vocabularyBucket.create({
            data: {
                userId,
                title,
            },
        });
    }
}
