import React from "react";
import "./TypingChallenge.css";

const TestLetter = ({ individualLetterInfo }) => {
    const status = individualLetterInfo.status; //const {status} = individualLetter
    const statusClassName = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted",
    }[status];

    return (  
        <span className={`testLetter ${statusClassName}`}>{individualLetterInfo.testLetter}</span>
    );
}

export default TestLetter;