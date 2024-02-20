type ResultModalProps = {
  isLoser: boolean
  isWinner: boolean
}

export const ResultModal = ({isLoser, isWinner}: ResultModalProps) => {
  return (
    <div className="result-modal">
      <p>You have { isLoser ? "lost" : isWinner ? "won" : "" }</p>
    </div>
  )
}