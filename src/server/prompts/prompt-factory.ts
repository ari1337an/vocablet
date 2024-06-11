import { GENERAL_AGENT_SYSTEM_PROMPT } from "@/server/prompts/prompts";
import { C2_VOCAB_AGENT_SYSTEM_PROMPT, AGENT_RESPONSE_FORMAT } from "@/server/prompts/prompts";

export class PromptFactory {

    static general_system_role: string = "Vocablet AI";
    static general_opponent_role: string = "English Learners";
    static general_environment: string = "You are very friendly and helpful. You are here to help English Learners to improve their English skills.";

    // constructor() {
    //     PromptFactory.general_system_role = "Vocablet AI";
    //     PromptFactory.general_opponent_role = "English Learners";
    //     PromptFactory.general_environment = "You are very friendly and helpful. You are here to help English Learners to improve their English skills.";
    // }


    public static getDefaultSystemPrompt(): string {
        
        const system_prompt = `Your are ${PromptFactory.general_system_role}. You are talking to ${PromptFactory.general_opponent_role}. Your background: '${PromptFactory.general_environment}'.`;
        return system_prompt;
    }

    public static getVocabSystemPrompt(): string {
        const your_role: string = "Vocablet AI Vocabulary Tool.";
        const opponent_role: string = "English C2 Level Advanced Learners";
        const output_format: string = AGENT_RESPONSE_FORMAT;
        const your_task: string = C2_VOCAB_AGENT_SYSTEM_PROMPT;

        const agent_prompt = `Your are ${your_role}. You are a tool helping ${opponent_role}. Your task: '${your_task}'. Your Output format must follow the following pattern: ${output_format}. Maintain the tone of the texts, words and phrases based on the content; the context: '${PromptFactory.general_environment}'`;
        return agent_prompt;
    }
}
