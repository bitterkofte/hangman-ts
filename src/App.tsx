// import { useCallback, useEffect, useState } from "react";
import { useState } from "react";
import words from "./data/wordList.json";
import { Hangman } from "./components/Hangman";
import { Header } from "./components/Header";
import { Word } from "./components/Word";
import { LetterBoard } from "./components/LetterBoard";
import { ResultModal } from "./components/ResultModal";

export const App = () => {
  const [targetWord, setTargetWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  // const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const incorrectLetters = guessedLetters.filter((l) => !targetWord.includes(l));

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = targetWord.split("").every((l) => guessedLetters.includes(l));
  // if(isLoser) setGameStatus("lost")
  // if(isWinner) setGameStatus("won")

  // const addGuessedLetter = useCallback((letter: string) => {
  //   if (guessedLetters.includes(letter) || isLoser || isWinner) return
  //   setGuessedLetters(currentLetters => [...currentLetters, letter])
  // }, [guessedLetters, isWinner, isLoser])

  // useEffect(() => {
  //   const handler = (e: KeyboardEvent) => {
  //     const key = e.key
  //     if (!key.match(/^[a-z]$/)) return
  //     e.preventDefault()
  //     addGuessedLetter(key)
  //   }
  //   document.addEventListener("keypress", handler)
  //   return () => document.removeEventListener("keypress", handler)
  // }, [guessedLetters])

  const playAgain = () => {
    setGuessedLetters([])
    setTargetWord(words[Math.floor(Math.random() * words.length)])
  }

  return (
    <div className="app">
      <Header />
      <p>{targetWord}</p>
      {/* <div>{gameStatus}</div> */}
      {(isLoser || isWinner) && <ResultModal isLoser={isLoser} isWinner={isWinner} playAgain={playAgain} />}
      <Hangman incorrectCount={incorrectLetters.length} />
      <Word word={targetWord} guessedLetters={guessedLetters} />
      <LetterBoard
        word={targetWord}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        isLoser={isLoser}
        isWinner={isWinner}
      />
    </div>
  );
};
