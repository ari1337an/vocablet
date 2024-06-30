import db from "@/server/database/db";

export default class RoleplayRepo {
    static findRoleplayById(roleplayId: string) {
        return db.roleplay.findUnique({
            where: { id: roleplayId },
        });
    }

    static findRoleplaysByUserId(userId: string) {
        return db.roleplay.findMany({
            where: {
                userId: userId,
            },
        });
    }

    static createRoleplay(
        userId: string,
        title: string,
        assistantRole: string,
        userRole: string,
        conversationTone: string,
        conversationContext: string
    ) {
        return db.roleplay.create({
            data: {
                userId,
                title,
                assistantRole,
                userRole,
                conversationTone,
                conversationContext,
            },
        });
    }

}
