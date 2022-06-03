import React from "react";
import TestLetter from "./TestLetter";
import "./TypingChallenge.css";
 
const TypingChallenge = ({
    testInfo,
    onInputChange,
    timeRemaining,
    timerStarted,
}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                    {timeRemaining >=10 ? timeRemaining: `0${timeRemaining}`}</p>
                <p className="timer-info">
                    {!timerStarted && "Start typing to start the test"}
                </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {
                            testInfo.map((individualLetterInfo, index ) => {
                            // return <div>{individualLetterInfo.testLetter}</div>
                                return <TestLetter
                                    key={index}
                                    individualLetterInfo={individualLetterInfo}
                                />
                            })
                        }
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                        className="textarea"
                        placeholder="Start typing here"
                        onChange={(e) => onInputChange(e.target.value)}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default TypingChallenge;