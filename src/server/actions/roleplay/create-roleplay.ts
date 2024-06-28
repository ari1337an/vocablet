import RoleplayRepo from "@/server/database/repositories/roleplay";

export default async function CreateRoleplayAction(userId: string, title: string, assistantRole: string, userRole: string, conversationTone: string, conversationContext: string) {
    try {
        // fetch vocabularies by bucket id
        const roleplay = await RoleplayRepo.createRoleplay(userId, title, assistantRole, userRole, conversationTone, conversationContext);
        return { success: true, roleplay };
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
