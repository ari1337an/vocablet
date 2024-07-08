import db from "@/server/database/db";

export default class ConversationRepo {
  static GetTurnsByConversationId(conversationId: string) {
    return db.conversation.findUnique({
      where: {
        id: conversationId,
      },
      select: {
        Turn: {
          select: {
            id: true,
            message: true,
            reply: true,
            createdAt: true,
            VocabAgentSuggestion: {
              select: {
                enhancedText: true,
                words: true,
              },
            },
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });
  }
  static async CreateNewConversation(userId: string, title: string) {
    return await db.conversation.create({
      data: {
        title,
        userId,
      },
    });
  }

  static async CreateNewConversationWithRoleplay(userId: string, title: string, roleplayId: string) {
    return await db.conversation.create({
      data: {
        title,
        userId,
        roleplayId, // Directly setting the roleplayId field
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

  static async GetRoleplayByConversationId(conversationId: string) {
    return db.conversation.findUnique({
      where: {
        id: conversationId,
      },
      select: {
        Roleplay: {
          select: {
            id: true,
            title: true,
            assistantRole: true,
            userRole: true,
            conversationTone: true,
            conversationContext: true,
          },
        },
      },
    });
  }

  static async GetConversationsByUserId(userId: string) {
    // fetch last 30 days conversation accoridng to createdAt field in descending order
    return db.conversation.findMany({
      where: {
        userId,
        createdAt: {
          gte: new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
    });
  }
}
