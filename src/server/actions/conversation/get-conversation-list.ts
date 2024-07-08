import ConversationRepo from "@/server/database/repositories/conversation";

export default async function GetConversationListAction(userId: string) {
  try {
    // fetch user chat history
    const conversations = await ConversationRepo.GetConversationsByUserId(userId);
    return { success: true, conversations };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}
