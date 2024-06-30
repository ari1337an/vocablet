import RoleplayRepo from "@/server/database/repositories/roleplay";

export default async function GetRoleplaysByUserIdAction(userId: string) {
    try {
        // fetch vocabularies by bucket id
        const roleplays = await RoleplayRepo.findRoleplaysByUserId(userId);
        return { success: true, roleplays };
    } catch (error) {
        return { success: false, message: (error as Error).message };
    }
}
