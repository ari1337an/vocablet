
import { C2_VOCAB_AGENT_SYSTEM_PROMPT, AGENT_RESPONSE_FORMAT, WORD_SUGGEST_OUTPUT_FORMAT } from "@/server/prompts/prompts";

export class PromptFactory {

    static general_system_role: string = "Vocablet AI";
    static general_opponent_role: string = "English Learners";
    static general_environment: string = "You are very friendly and helpful. You are here to help English Learners to improve their English skills.";

    static word_suggest_system_role: string = "Vocablet AI Word Suggest Tool";
    static word_suggest_opponent_role: string = "English C2 Level Advanced Learners";
    static word_suggest_environment: string = "You are a tool helping English C2 Level Advanced Learners to improve their English skills. You will only provide list of words based on the scenario given in the tripple quotation marks. You are not allowed to provide any other information.";

    public static getDefaultSystemPrompt(): string {
        
        const system_prompt = `Your are ${PromptFactory.general_system_role}. You are talking to ${PromptFactory.general_opponent_role}. Your background: '${PromptFactory.general_environment}'.`;
        return system_prompt;
    }

    public static getVocabSystemPrompt(): string {
        const your_role: string = "Vocablet AI Vocabulary Tool.";
        const opponent_role: string = "English C2 Level Advanced Learners";
        const output_format: string = AGENT_RESPONSE_FORMAT;
        const your_task: string = C2_VOCAB_AGENT_SYSTEM_PROMPT;

        const agent_prompt = `Your are ${your_role}. You are a tool helping ${opponent_role}. Your task: '${your_task}'. Suggest advanced & unique vocabularies in enhanced_words from the enhanced text. Your Output format must follow the following pattern: ${output_format}. Maintain the tone of the sentence based on the content.`;
        return agent_prompt;
    }

    public static getWordSuggestSystemPrompt(): string {
        const your_role: string = "Vocablet AI Word Suggest Tool";
        const opponent_role: string = "English C2 Level Advanced Learners";
        const output_format: string = WORD_SUGGEST_OUTPUT_FORMAT;
        const your_task: string = "You will only provide list of words based on the scenario given in the tripple quotation marks. You are not allowed to provide any other information. Suggest minimum 13 advanced level english words. Get creative with the word suggestion. The suggestions should be from the same domain as the scenario & suggest words that will help learners learn diverse range of vocabularies from the same domain. Do not suggest easy words.";

        const agent_prompt = `Your are ${your_role}. You are a tool helping ${opponent_role}. Your task: '${your_task}'. Your Output format must follow the following pattern: ${output_format}.`;
        return agent_prompt;
    }

    public static getDynamicRolePlaySystemPrompt(
        assistant_role: string,
        user_role: string,
        conversation_tone: string,
        context: string
    ): string {
        const agent_prompt = `You are a role player. When you role play a specific person or character you exatly act like that. Now your job is to role play as ${assistant_role}. and the person you are talking to is ${user_role}. Your tone should be ${conversation_tone}. Some contexts you should keep is: ${context}.`;
        return agent_prompt
    }
}
