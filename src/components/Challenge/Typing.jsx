import React from "react";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import DetailCard from "./DetailCard";
import "./Typing.css";

const Typing = ({
    selectedParagraph,
    testInfo,
    onInputChange,
    word,
    character,
    speed,
    timeRemaining,
    timerStarted,
}) => {
    console.log("Word from Typing = ", word);
    console.log("Char from Typing = ", character);
    console.log("Speed from Typing = ", speed);
    return (
        <div className="typing">
            {/* Details Section */}
            <div className="details">
                <DetailCard cardName="Words" cardValue={word}/>
                <DetailCard cardName="Characters" cardValue={character}/>
                <DetailCard cardName="Speed (in wpm)" cardValue={speed}/>
            </div>
            {/* Typing Input Section */}
            <div className="typewriter-input">
                <TypingChallenge testInfo={testInfo}
                    selectedParagraph={selectedParagraph}
                    onInputChange={onInputChange}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}/>
            </div>
		</div>
	);
};

export default Typing;
