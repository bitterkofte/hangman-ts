import { useState } from "react";

type WordProps = {
  word: string
  guessedLetters: string[]
  // setRightCount: React.Dispatch<React.SetStateAction<number>>
};

export const Word = ({ word, guessedLetters }: WordProps) => {

  const doesInclude = (l: string) => guessedLetters.includes(l)
  return (
    <div className="word">
      {word.split("").map((l, i) => (
        <span key={i} className="border">
          <span
            className="word-letter"
            // style={{
            //   // visibility: guessedLetters.includes(l) ? "visible" : "hidden",
            //   // display: guessedLetters.includes(l) ? "inline" : "none",
            // }}
          >
            {doesInclude(l) ? l : <>&nbsp;</>}
          </span>
        </span>
      ))}
    </div>
  );
};
