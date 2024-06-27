import { create } from "zustand";

export interface MessageType {
  role: "user" | "assistant" | "agent";
  message?: string;
  suggestedMessage?: string;
  enhancedText?: string;
  words?: { [key: string]: string };
  // phrases?: { [key: string]: string };
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: string;
}

interface AppState {
  messages: MessageType[];
  conversationId: string | null;
  conversations: Conversation[];
  addMessage: (message: MessageType) => void;
  setMessages: (messages: MessageType[]) => void;
  setConversationId: (id: string | null) => void;
  setConversations: (conversations: Conversation[]) => void;
  addConversation: (conversation: Conversation) => void;
  updateMessage: (index: number, updatedFields: Partial<MessageType>) => void;
}

const useAppStore = create<AppState>((set) => ({
  messages: [],
  conversationId: null,
  conversations: [],
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
}));

export default useAppStore;
