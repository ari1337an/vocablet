import { create } from "zustand";

export interface MessageType {
  role: "user" | "assistant" | "agent";
  message?: string;
  suggestedMessage?: string;
  enhancedText?: string;
  words?: string[];
  // phrases?: { [key: string]: string };
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: string;
}

export interface Roleplay {
  agent: "general" | "roleplay";
  id?: string;
  title?: string;
  assistantRole?: string;
  userRole?: string;
  conversationTone?: string;
  conversationContext?: string;
}

interface AppState {
  messages: MessageType[];
  conversationId: string | null;
  conversations: Conversation[];
  roleplayMode: Roleplay;
  addMessage: (message: MessageType) => void;
  setMessages: (messages: MessageType[]) => void;
  setConversationId: (id: string | null) => void;
  setConversations: (conversations: Conversation[]) => void;
  addConversation: (conversation: Conversation) => void;
  updateMessage: (index: number, updatedFields: Partial<MessageType>) => void;
  setRoleplayMode: (roleplayMode: Roleplay) => void;
  updateRoleplayFields: (updatedFields: Partial<Roleplay>) => void;
}

const useAppStore = create<AppState>((set) => ({
  messages: [],
  conversationId: null,
  conversations: [],
  roleplayMode: { agent: "general" },
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setMessages: (messages) => set({ messages }),
  setConversationId: (id) => set({ conversationId: id }),
  setConversations: (conversations) => set({ conversations }),
  addConversation: (conversation) =>
    set((state) => ({ conversations: [...state.conversations, conversation] })),
  updateMessage: (index, updatedFields) =>
    set((state) => {
      const updatedMessages = [...state.messages];
      updatedMessages[index] = { ...updatedMessages[index], ...updatedFields };
      return { messages: updatedMessages };
    }),
  setRoleplayMode: (roleplayMode) => set({ roleplayMode }),
  updateRoleplayFields: (updatedFields) =>
    set((state) => ({
      roleplayMode: { ...state.roleplayMode, ...updatedFields },
    })),
}));

export default useAppStore;
