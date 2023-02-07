import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessResult from "../GuessResult";
import GuessInput from "../GuessInput";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [allGuess, setAllGuess] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(null);

  function handleSubmitGuess(newGuess) {
    const nextAllGuess = [...allGuess, newGuess];

    setAllGuess(nextAllGuess);

    if (newGuess === answer) {
      setGameStatus("win");
    } else if (nextAllGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  }

  function handleGuessResult(index) {
    return checkGuess(allGuess[index], answer);
  }

  return (
    <>
      <GuessResult handleGuessResult={handleGuessResult} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <Banner gameStatus={gameStatus} guessCount={allGuess.length} />
    </>
  );
}

export default Game;
