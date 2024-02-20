type HangmanProps = {
  incorrectCount: number
}

export const Hangman = ({incorrectCount}: HangmanProps) => {
  return (
    <svg id="Hangman" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 737.09 710.64">
      <g className="gallows-container">
        <line className="stick" x1="5" y1="705.64" x2="487.93" y2="705.64"/>
        <line className="stick" x1="246.46" y1="5" x2="246.46" y2="705.64"/>
        <line className="stick" x1="605" y1="5" x2="246.46" y2="5"/>
        <line className="stick" x1="605" y1="105.8" x2="605" y2="5"/>
      </g>
      <g className="man-container">
        <circle style={{opacity: incorrectCount>=1 ? 1 : 0}} className="part head" cx="605" cy="169.1" r="63.3"/>
        <line   style={{opacity: incorrectCount>=2 ? 1 : 0}} className="part trunk" x1="605" y1="448.91" x2="605" y2="232.4"/>
        <line   style={{opacity: incorrectCount>=5 ? 1 : 0}} className="part r-arm" x1="605" y1="322.84" x2="735.1" y2="266.17"/>
        <line   style={{opacity: incorrectCount>=6 ? 1 : 0}} className="part l-arm" x1="605" y1="322.84" x2="474.9" y2="266.17"/>
        <line   style={{opacity: incorrectCount>=3 ? 1 : 0}} className="part r-foot" x1="675.95" y1="571.81" x2="605" y2="448.91"/>
        <line   style={{opacity: incorrectCount>=4 ? 1 : 0}} className="part l-foot" x1="534.05" y1="571.81" x2="605" y2="448.91"/>
      </g>
    </svg>
  )
}