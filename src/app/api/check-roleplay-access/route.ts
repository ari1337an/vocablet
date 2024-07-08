import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
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


        const userEntitlements = await EntitlementRepo.getEntitlementOfUser(userId).then((user) => user?.Entitlements);

        const hasRoleplayFeatureEntitleMent =
            userEntitlements?.some(
                (entitlement) => entitlement.feature === "vocablet-roleplay-feature-in-ai-chat"
            ) || false;
            

        // Return the completion response
        return Response.json(hasRoleplayFeatureEntitleMent, {
            status: 200,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: (error as Error).message },
            { status: 500 }
        );
    }
}
