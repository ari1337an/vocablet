import React from "react";
import ChatHistoryItem from "./chat-history-item";
import { Conversation } from "../../_store/useAppStore";

interface Props {
  items: Conversation[];
  title: string;
}

const ChatHistory: React.FC<Props> = ({ items, title }) => {
  return (
    <div className="ChatHistory mx-4 mb-4 flex flex-col">
      <div className="text-xs mb-2 text-muted-foreground font-semibold">
        {title}
      </div>
      {items.map((item, index) => (
        <ChatHistoryItem text={item.title} id={item.id} key={item.id} />
      ))}
    </div>
  );
};

export default ChatHistory;
