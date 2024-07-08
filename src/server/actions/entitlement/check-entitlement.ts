import EntitlementRepo from "@/server/database/repositories/entitlement";
import { Entitlement } from "@prisma/client";

// Define ENUM strings for entitlement slugs
export enum EntitlementSlugs {
  VOCABLET_AI_CHAT_LIMITED = "vocablet-ai-chat-limited", // for 30 limits in each chat
  VOCABLET_AI_CHAT_UNLIMITED = "vocablet-ai-chat-unlimited", // for unlimited limits in each chat
  VOCABLET_FLASHCARDS_LEARNING = "vocablet-flashcards-learning", // for flashcards features
  VOCABLET_ROLEPLAY_FEATURE_IN_AI_CHAT = "vocablet-roleplay-feature-in-ai-chat", // for roleplay features
  VOCABLET_MEANING_AGENT = "vocablet-meaning-agent" // for meaning agent.
}

// DTO for enum to string conversion
export const EntitlementSlugDTO = {
  toString: (slug: EntitlementSlugs): string => slug,
  toEnum: (slug: string): EntitlementSlugs => {
    switch (slug) {
      case "vocablet-flashcards-learning":
        return EntitlementSlugs.VOCABLET_FLASHCARDS_LEARNING;
      case "vocablet-ai-chat-limited":
        return EntitlementSlugs.VOCABLET_AI_CHAT_LIMITED;
      case "vocablet-roleplay-feature-in-ai-chat":
        return EntitlementSlugs.VOCABLET_ROLEPLAY_FEATURE_IN_AI_CHAT;
      case "vocablet-ai-chat-unlimited":
        return EntitlementSlugs.VOCABLET_AI_CHAT_UNLIMITED;
      case "vocablet-meaning-agent":
        return EntitlementSlugs.VOCABLET_MEANING_AGENT;
      default:
        throw new Error(`Unknown entitlement slug: ${slug}`);
    }
  },
};

/**
 * 
 * @param userId
 * @param entitlementSlug
 */
export async function checkEntitlement(
  userId: string,
  entitlementSlug: EntitlementSlugs
): Promise<boolean> {
  try {
    const usersEntitlements = (await EntitlementRepo.getEntitlementOfUser(
      userId
    ))?.Entitlements;

    if (!usersEntitlements) {
      return false;
    }

    // Check if entitlementSlug is present in user's entitlements
    return usersEntitlements.some(
      (entitlement: Entitlement) => entitlement.feature === EntitlementSlugDTO.toString(entitlementSlug) && entitlement.active === true
    );
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
