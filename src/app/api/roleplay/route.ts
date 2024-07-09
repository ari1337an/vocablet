import GetUserIdFromReq from "@/server/actions/auth/get-userId-from-req";
import { checkEntitlement, EntitlementSlugs } from "@/server/actions/entitlement/check-entitlement";
import CreateRoleplayAction from "@/server/actions/roleplay/create-roleplay";
import GetRoleplaysByUserIdAction from "@/server/actions/roleplay/get-roleplays-by-user-id";
import EntitlementRepo from "@/server/database/repositories/entitlement";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }

        const hasRoleplayFeatureEntitleMent = await checkEntitlement(userId, EntitlementSlugs.VOCABLET_ROLEPLAY_FEATURE_IN_AI_CHAT);

        // const hasRoleplayFeatureEntitleMent =
        //     userEntitlements?.some(
        //         (entitlement) => entitlement.feature === "vocablet-roleplay-feature-in-ai-chat"
        //     ) || false;

        if (!hasRoleplayFeatureEntitleMent) {
            return Response.json({ success: false, message: "You do not have access to use this feature. Upgrade your plan to use this feature." }, { status: 200 })
        }


        const body = await request.json();
        const title = body.title;
        const assistantRole = body.assistantRole;
        const userRole = body.userRole;
        const conversationTone = body.conversationTone;
        const conversationContext = body.conversationContext;

        // fetch user chat history
        const responseJson = await CreateRoleplayAction(userId, title, assistantRole, userRole, conversationTone, conversationContext);

        // Return the completion response
        return Response.json(responseJson, {
            status: responseJson.success ? 200 : 500,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: (error as Error).message },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const userId = await GetUserIdFromReq(request);
        if (!userId) {
            throw new Error("Unauthorized request.");
        }

        const hasRoleplayFeatureEntitleMent =
            await checkEntitlement(userId, EntitlementSlugs.VOCABLET_ROLEPLAY_FEATURE_IN_AI_CHAT);

        if (!hasRoleplayFeatureEntitleMent) {
            return Response.json({ success: false, message: "You do not have access to use this feature. Upgrade your plan to use this feature." }, { status: 200 })
        }

        // fetch user chat history
        const responseJson = await GetRoleplaysByUserIdAction(userId);

        // Return the completion response
        return Response.json(responseJson, {
            status: responseJson.success ? 200 : 500,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: (error as Error).message },
            { status: 500 }
        );
    }
}
