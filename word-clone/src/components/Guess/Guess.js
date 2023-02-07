import React from "react";

import { range } from "../../utils";

function Guess({ guessResult }) {
  const cells = range(5);

  return (
    <p className="guess">
      {cells.map((cell) => {
        const letter = guessResult?.[cell].letter;
        const status = guessResult?.[cell].status;
        const className = status ? `cell ${status}` : "cell";

        return (
          <span key={cell} className={className}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
