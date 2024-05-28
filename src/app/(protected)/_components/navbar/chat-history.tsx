import React from "react";
import ChatHistoryItem from "./chat-history-item";

interface ChatItem {
  text: string;
  id: string;
}

interface Props {
  items: ChatItem[];
  title: string;
}

const ChatHistory: React.FC<Props> = ({ items, title }) => {
  return (
    <div className="ChatHistory mx-4 mb-4 flex flex-col">
      <div className="text-xs mb-2 text-muted-foreground font-semibold">
        {title}
      </div>
      {items.map((item, index) => (
        <ChatHistoryItem text={item.text} id={item.id} key={index} />
      ))}
    </div>
  );
};

export default ChatHistory;
