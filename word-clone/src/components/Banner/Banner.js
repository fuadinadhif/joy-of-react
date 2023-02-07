import React from "react";

function WinBanner({ display, guessCount }) {
  return (
    <div className="happy banner" style={{ display }}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessCount} guesses</strong>.
      </p>
    </div>
  );
}

function LoseBanner({ display }) {
  return (
    <div className="sad banner" style={{ display }}>
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
  );
}

function Banner({ gameStatus, guessCount }) {
  const display = gameStatus !== null ? "block" : "none";

  if (gameStatus === "win") {
    return <WinBanner display={display} guessCount={guessCount} />;
  } else {
    return <LoseBanner display={display} />;
  }
}

export default Banner;
