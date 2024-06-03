import db from "@/server/database/db";

export default class VocabAgentSuggestionRepo {
  static findVocabAgentSuggestionById(suggestionId: string) {
    return db.vocabAgentSuggestion.findUnique({
      where: { id: suggestionId },
    });
  }

  static findVocabAgentSuggestionByUserId(userId: string) {
    return db.vocabAgentSuggestion.findMany({
      where: {
        Turn: {
          userId,
        },
      },
    });
  }

  static createVocabAgentSuggestion(
    turnId: string,
    totalTokens: number,
    enhancedText: string,
    words: Record<string, any>,
    phrases: Record<string, any>
  ) {
    return db.vocabAgentSuggestion.create({
      data: {
        turnId,
        totalTokens,
        enhancedText,
        words,
        phrases,
      },
    });
  }
}
