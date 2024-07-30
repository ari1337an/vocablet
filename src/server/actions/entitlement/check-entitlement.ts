import EntitlementRepo from "@/server/database/repositories/entitlement";
import { Entitlement } from "@prisma/client";

// Define ENUM strings for entitlement slugs
export const EntitlementSlugs = Object.freeze({
  VOCABLET_AI_CHAT_LIMITED: "vocablet-ai-chat-limited",
  VOCABLET_AI_CHAT_UNLIMITED: "vocablet-ai-chat-unlimited",
  VOCABLET_FLASHCARDS_LEARNING: "vocablet-flashcards-learning",
  VOCABLET_ROLEPLAY_FEATURE_IN_AI_CHAT: "vocablet-roleplay-feature-in-ai-chat",
  VOCABLET_MEANING_AGENT: "vocablet-meaning-agent",
  VOCABLET_WORD_GENERATE_AGENT: "vocablet-word-generate-agent",
});

// DTO for enum to string conversion
export const EntitlementSlugDTO = {
  toString: (slug: any): string => slug,
  toEnum: (slug: string) => {
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
      case "vocablet-word-generate-agent":
        return EntitlementSlugs.VOCABLET_WORD_GENERATE_AGENT
      default:
        throw new Error(`Unknown entitlement slug: ${slug}`);
    }
  },
};

/**
 * Checks for if a user have an entitlement to a feature.
 * @param userId
 * @param entitlementSlug
 */
export async function checkEntitlement(
  userId: string,
  entitlementSlug: any
): Promise<boolean> {
  try {
    const usersEntitlements = (
      await EntitlementRepo.getEntitlementOfUser(userId)
    )?.Entitlements;

    if (!usersEntitlements) {
      return false;
    } 

    // Check if entitlementSlug is present in user's entitlements
    const result =  usersEntitlements.some(
      (entitlement: Entitlement) =>
        entitlement.feature === entitlementSlug &&
        entitlement.active === true
    );

    return result;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
