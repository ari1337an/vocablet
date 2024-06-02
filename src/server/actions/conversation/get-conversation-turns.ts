import ConversationRepo from "@/server/database/repositories/conversation";

export default async function GetConversationTurnsAction(
  conversationId: string
) {
  try {
    // Fetch user chat history
    const conversationTurns = await ConversationRepo.GetTurnsByConversationId(
      conversationId
    );

    if (!conversationTurns) throw new Error("Conversation not found.");

    // Create a message list
    const messages = conversationTurns.Turn.map((turn) => [
      { role: "user", message: turn.message },
      { role: "assistant", message: turn.reply },
    ]).flat();

    return { success: true, messages };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}
