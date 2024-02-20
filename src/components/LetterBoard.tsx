type LetterBoardProps = {
  word: string
  guessedLetters: string[]
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>
  isLoser: boolean
  isWinner: boolean
}

const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export const LetterBoard = ({word, guessedLetters, setGuessedLetters, isLoser, isWinner}: LetterBoardProps) => {
  const lIncludes = (l: string) => guessedLetters.includes(l.toLowerCase())
  const wIncludes = (l: string) => word.includes(l.toLowerCase())
  const isPresent = (l: string) => lIncludes(l) && wIncludes(l)
  const isAbsent = (l: string) => lIncludes(l) && !wIncludes(l)

  const appendLetter = (l: string) => {
    setGuessedLetters(prev => [...prev, l.toLowerCase()])
  }

  return (
    <div className="letter-board">
      {keys.map(l => (
        <button key={l} onClick={() => appendLetter(l)} className={`key-letter ${isPresent(l) ? "present" : ""}${isAbsent(l) ? "absent" : ""}`} disabled={lIncludes(l) || isWinner || isLoser}>{ l }</button>
      ))}
    </div>
  )
}