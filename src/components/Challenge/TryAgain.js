import React from "react";
import "./Challenge.css";

const TryAgain = ({ word, character, speed, startAgain }) => {
	const url = "anmolbansal.com";
	return (
		<div className="try-again">
			<h1> Test Results </h1>
			<div className="result">
				<p>
					<b>Characters: </b>
					{character}
				</p>
				<p>
					<b>Words: </b>
					{word}
				</p>
				<p>
					<b>Speed: </b>
					{speed} wpm
				</p>
			</div>
			<div>
				<button
					onClick={() => startAgain()}
					className="end-buttons start-again-btn"
				>
					Re-try
				</button>
				<button
					onClick={() =>
						window.open(
							"https://www.facebook.com/sharer/sharer.php?u=" +
								url,
							"facebook-share-dialog",
							"width=800,height=600"
						)
					}
					className="end-buttons share-btn"
				>
					Share
				</button>
				<button
					onClick={() =>
						window.open(
							"https://twitter.com/intent/tweet?text=Check%20this%20out%20" +
								url,
							"Twitter",
							"width=800,height=600"
						)
					}
					className="end-buttons tweet-btn"
				>
					Tweet
				</button>
			</div>
		</div>
	);
};

export default TryAgain;
