import ConversationRepo from "@/server/database/repositories/conversation";

export default async function GetConversationRoleplayAction(
    conversationId: string
) {
    try {
        // Fetch user chat history
        const conversationRoleplay = await ConversationRepo.GetRoleplayByConversationId(
            conversationId
        );

        let hasRoleplayEnabled = true;
        if (!conversationRoleplay?.Roleplay) hasRoleplayEnabled = false;


        // console.log(messages);
        if (hasRoleplayEnabled) {
            return { success: true, hasRoleplayEnabled, conversationRoleplay };
        } else {
            return { success: false, hasRoleplayEnabled };

        }
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
