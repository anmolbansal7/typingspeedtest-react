import React from "react";
import "./Landing.css";
import hero from "../../assets/hero.jpeg";
import Typewriter from "typewriter-effect";
const Landing = () => {
	return (
		<div className="landing">
			<div className="landing-left">
				<h1>Can you type...</h1>
				<div className="typewriter-container">
					<Typewriter
						options={{
							strings: ["Fast?", "Accurate?", "Quick?"],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>
			<div className="landing-right">
				<img
					src={hero}
					alt="hero-image"
					className="landing-image"
				></img>
			</div>
		</div>
	);
};

export default Landing;
