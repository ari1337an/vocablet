import React from "react";
import { MessageType } from "../../_store/useAppStore";

type MessageProps = {
  message: MessageType;
};

export default function Message({ message }: MessageProps) {
  return (
    <div
      className={`p-3 rounded-xl mb-2 break-words ${
        message.role === "user"
          ? "self-end bg-primary text-white max-w-xs"
          : "self-start bg-black text-white"
      }`}
    >
      {message.message}
    </div>
  );
}
