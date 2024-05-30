import db from "@/server/database/db";

export default class ConversationRepo {
  static matchConversationOwnership(userId: string, conversationId: string) {
    return true; // TODO: Implement this function
  }
}
