// components/FlashCard.tsx
"use client"
import React from "react";

interface FlashCardProps {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  meaning: string;
  example: string;
}

const FlashCard: React.FC<FlashCardProps> = ({
  word,
  pronunciation,
  partOfSpeech,
  meaning,
  example,
}) => {
  return (
    <div className="bg-grey shadow-md rounded-lg p-6 my-4 w-full max-w-sm mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{word}</h2>
        <p className="text-gray-500 italic">{pronunciation}</p>
        <p className="text-gray-700 font-semibold">{partOfSpeech}</p>
        <p className="text-gray-800 mt-4">{meaning}</p>
        <p className="text-gray-600 mt-2">({example})</p>
      </div>
      <div className="flex justify-around mt-4">
        <button className="text-red-500">❤️</button>
        <button className="text-blue-500">🔄</button>
        <button className="text-green-500">📌</button>
      </div>
    </div>
  );
};

export default FlashCard;
