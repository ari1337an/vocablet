import db from "@/server/database/db";

export default class TurnRepo {
  static async CreateTurnInDB(
    userId: string,
    conversationId: string,
    message: string,
    reply: string,
    totalTokens: number
  ) {
    return db.turn.create({
      data: {
        message,
        reply,
        conversationId,
        userId,
        totalTokens,
      },
    });
  }
}
