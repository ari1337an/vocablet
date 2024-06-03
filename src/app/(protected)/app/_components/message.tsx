import React from "react";
import { MessageType } from "../../_store/useAppStore";

type MessageProps = {
  message: MessageType;
};

export default function Message({ message }: MessageProps) {
  {
    console.log(message);
  }
  return (
    <div
      className={`my-8  max-w-max ${
        message.role === "user" ? "self-end" : "self-start"
      }`}
    >
      <div
        className={`p-3 break-words ${
          message.role === "user"
            ? "bg-primary text-white rounded-tl-xl"
            : "bg-black text-white rounded-tr-xl rounded-b-xl"
        }`}
      >
        {message.message}
      </div>

      {/* check if the message role is user, if yes than show this */}
      {message.role === "user" && message.enhancedText != null && (
        <div
          className={`p-4 pl-5 rounded-b-xl break-words text-sm text-[#2e3333] self-end bg-[#C1B3AF] max-w-xs`}
        >
          {/* use the enhanced text here. */}
          <p className="font-bold py-1">Suggestion:</p>
          {message.enhancedText}
        </div>
      )}
    </div>
  );
}
