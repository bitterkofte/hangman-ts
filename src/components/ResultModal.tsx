type ResultModalProps = {
  isLoser: boolean;
  isWinner: boolean;
  playAgain: () => void;
};

export const ResultModal = ({ isLoser, isWinner, playAgain }: ResultModalProps) => {
  return (
    <div className="bg">
      <div className="result-modal">
        <p>You have {isLoser ? "lost" : isWinner ? "won" : ""}</p>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};
