import React from "react";
import "./Challenge.css";
import Test from "./Test";

const Challenge = ({
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
	console.log("Word from Chall = ", word);
	console.log("Char from chall = ", character);
	console.log("Speed from chall = ", speed);
	return (
		<div className="challenge">
			<h1>Take a Speed Test Now!</h1>
			<Test
				testInfo={testInfo}
				selectedParagraph={selectedParagraph}
				onInputChange={onInputChange}
				word={word}
				character={character}
				speed={speed}
				timeRemaining={timeRemaining}
				timerStarted={timerStarted}
				startAgain={startAgain}
			/>
		</div>
	);
};

export default Challenge;
