import React, { useState } from "react";
import { MessageType } from "../../_store/useAppStore";
import MarkdownComponent from "./markdown-component";

type MessageProps = {
  message: MessageType;
};

export default function Message({ message }: MessageProps) {
  const [showAgentMessage, setShowAgentMessage] = useState(true);

  // const toggleAgentMessage = () => {
  //   setShowAgentMessage(!showAgentMessage);
  // };

  if(message.role === "assistant" && message.message === "You do not have access to use this feature. Upgrade your plan to use this feature."){
    message.message = "[You do not have access to use this feature. Upgrade your plan to use this feature. Click Here To Upgrade](https://vocablet.io/pricing)"
  }

  return (
    <div
      className={`text-sm max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ${
        message.role === "assistant" ? "self-start" : "self-end"
      }`}
    >
      {message.role === "assistant" && (
        <div
          className={`p-5 my-8 break-words mr-5 bg-secondary text-primary max-w-xl rounded-xl`}
          style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
        >
          <MarkdownComponent markdownText={message.message as string} />
        </div>
      )}

      <div className="w-[350px] xl:w-[500px]">
        {message.role === "user" && (
          <div
            className="p-5 break-words bg-primary text-white w-full rounded-t-xl"
            style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
          >
            {message.message}
          </div>
        )}

        {message.role === "agent" && (
          <div
            className={`px-5 py-3 rounded-b-xl break-words text-sm text-[#2e3333] bg-[#C1B3AF] w-full ${
              showAgentMessage ? "" : "hidden"
            }`}
          >
            <p className="font-bold m-0 p-0">Suggested words:</p>
            <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
              {Array.isArray(message.words) ? message.words.join(", ") : ""}
            </div>
            <p className="font-bold m-0 p-0">Suggested Sentence:</p>
            <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
              {message.enhancedText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
