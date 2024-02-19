import { useState } from "react";
import words from './data/wordList.json'
import { Hangman } from "./components/Hangman";

export const App = () => {
  const [targetWord, setTargetWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  const [letters, setLetters] = useState<string[]>();
  console.log('targetWord: ', targetWord)
  return (
    <div className="app">
      <div>win</div>
      <Hangman/>
    </div>
  )
}