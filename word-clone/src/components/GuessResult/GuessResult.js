import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import Guess from "../Guess/Guess";

function GuessResult({ handleGuessResult }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((row) => {
        const guessResult = handleGuessResult(row);

        return <Guess key={row} guessResult={guessResult} />;
      })}
    </div>
  );
}

export default GuessResult;
