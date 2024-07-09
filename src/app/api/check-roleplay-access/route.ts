import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import { checkEntitlement, EntitlementSlugs } from "@/server/actions/entitlement/check-entitlement";
import CreateRoleplayAction from "@/server/actions/roleplay/create-roleplay";
import GetRoleplaysByUserIdAction from "@/server/actions/roleplay/get-roleplays-by-user-id";
import EntitlementRepo from "@/server/database/repositories/entitlement";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }

        const hasRoleplayFeatureEntitleMent =
            await checkEntitlement(userId, EntitlementSlugs.VOCABLET_ROLEPLAY_FEATURE_IN_AI_CHAT);

        // Return the completion response
        return Response.json({ success: true, hasRoleplayAccess: hasRoleplayFeatureEntitleMent }, {
            status: 200,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: (error as Error).message },
            { status: 500 }
        );
    }
}
