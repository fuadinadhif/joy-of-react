import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        handleSubmitGuess(tentativeGuess);
        setTentativeGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={5}
        title="Input exaclty 5 letters. No more, no less."
        disabled={gameStatus !== null}
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
