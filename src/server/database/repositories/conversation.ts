import db from "@/server/database/db";

export default class ConversationRepo {
  static async CreateNewConversation(userId: string, title: string) {
    return await db.conversation.create({
      data: {
        title,
        userId,
      },
    });
  }
  static async GetConversationByUserIdAndConversationId(
    userId: string,
    conversationId: string
  ) {
    return await db.conversation.findUnique({
      where: {
        id: conversationId,
        userId,
      },
    });
  }
}
