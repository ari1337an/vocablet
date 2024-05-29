import React from "react";
import Message from "./message";
import { MessageType } from "./app";

interface ChatProps {
  messages: MessageType[];
}

export default function Chat({ messages }: ChatProps) {
  return (
    <div className="flex flex-col items-start w-full px-5">
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
}
