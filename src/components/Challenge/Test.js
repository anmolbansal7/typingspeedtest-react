import React from "react";
import "./Challenge.css";
import TryAgain from "./TryAgain";
import Typing from "./Typing";

const Test = ({
	selectedParagraph,
	testInfo,
	onInputChange,
	word,
	character,
	speed,
	timeRemaining,
	timerStarted,
	startAgain,
}) => {
	console.log("Word from test = ", word);
	console.log("Char from test = ", character);
	console.log("Speed from tests = ", speed);
	return (
		<div className="test">
			{timeRemaining > 0 ? (
				<div className="typing">
					<Typing
						selectedParagraph={selectedParagraph}
						testInfo={testInfo}
						onInputChange={onInputChange}
						word={word}
						character={character}
						speed={speed}
						timeRemaining={timeRemaining}
						timerStarted={timerStarted}
					/>
				</div>
			) : (
				<div className="try-again">
					<TryAgain
						word={word}
						character={character}
						speed={speed}
						startAgain={startAgain}
					/>
				</div>
			)}
		</div>
	);
};

export default Test;
