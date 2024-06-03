import React from "react";
import { MessageType } from "../../_store/useAppStore";

type MessageProps = {
  message: MessageType;
};

export default function Message({ message }: MessageProps) {
  // print the words json object from the message
  // console.log(message.words);
  return (
    <div
      className={`my-8 text-sm max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ${
        message.role === "user" ? "self-end" : "self-start"
      }`}
    >
      <div
        className={`p-5 break-words ${
          message.role === "user"
            ? "ml-5 bg-primary text-white max-w-xl"
            : "mr-5 bg-black text-white max-w-xl"
        }`}
        style={{ wordWrap: "break-word", overflowWrap: "break-word" }} // Add these styles
      >
        {message.message}
      </div>

      {/* check if the message role is user, if yes than show this */}
      {message.role === "user" && message.words != null && (
        <div
          className={`p-5 ml-5 rounded-b-xl break-words text-sm text-[#2e3333] self-end bg-[#C1B3AF] ${
            // Add classNames for mobile and larger devices
            "max-w-xl xl:max-w-2xl"
          }`}
          style={{ wordWrap: "break-word", overflowWrap: "break-word" }} // Add these styles
        >
          {/* use the enhanced text here. */}
          <p className="font-bold py-1">Suggested words:</p>
          {/* show the words object as a list of words here */}
          <ol>
            {Object.keys(message.words).map((word, index) => (
              <li key={index}>
                <span>{word}</span>:{" "}
                {message.words != null ? message.words[word] : ""}
              </li>
            ))}
          </ol>

          <p className="font-bold py-1">Suggested Sentence:</p>

          {message.enhancedText}
        </div>
      )}
    </div>
  );
}
