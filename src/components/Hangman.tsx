export const Hangman = () => {
  return (
    <svg id="Hangman" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 737.09 710.64">
      <g className="gallows-container">
        <line className="stick" x1="5" y1="705.64" x2="487.93" y2="705.64"/>
        <line className="stick" x1="246.46" y1="5" x2="246.46" y2="705.64"/>
        <line className="stick" x1="605" y1="5" x2="246.46" y2="5"/>
        <line className="stick" x1="605" y1="105.8" x2="605" y2="5"/>
      </g>
      <g className="man-container">
        <circle style={{opacity: false ? 0 : 1}} className="part head" cx="605" cy="169.1" r="63.3"/>
        <line   style={{opacity: false ? 0 : 1}} className="part trunk" x1="605" y1="448.91" x2="605" y2="232.4"/>
        <line   style={{opacity: false ? 0 : 1}} className="part r-foot" x1="675.95" y1="571.81" x2="605" y2="448.91"/>
        <line   style={{opacity: false ? 0 : 1}} className="part l-foot" x1="534.05" y1="571.81" x2="605" y2="448.91"/>
        <line   style={{opacity: false ? 0 : 1}} className="part r-arm" x1="605" y1="322.84" x2="735.1" y2="266.17"/>
        <line   style={{opacity: false ? 0 : 1}} className="part l-arm" x1="605" y1="322.84" x2="474.9" y2="266.17"/>
      </g>
    </svg>
  )
}