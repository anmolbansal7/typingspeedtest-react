import React from "react";
import "./App.css";
import { SAMPLE_PARAGRAPHS } from "./data/sampleParagraphs";
import Challenge from "./components/Challenge/Challenge";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

const TotalTime = 10;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const defaultState = {
	selectedParagraph: "",
	testInfo: [],
	timerStarted: false,
	timeRemaining: TotalTime,
	word: 0,
	character: 0,
	speed: 0,
};
class App extends React.Component {
	state = defaultState;

	fetchNewParagraphFallback = () => {
		const data =
			SAMPLE_PARAGRAPHS[
				Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
			];

		const selectedParagraphArray = data.split("");
		const testInfo = selectedParagraphArray.map((selectedLetter) => {
			return {
				testLetter: selectedLetter,
				status: "notAttempted",
			};
		});

		// Update the testInfo in state
		this.setState({
			...defaultState,
			selectedParagraph: data,
			testInfo,
		});
	};

	fetchNewParagraph = () => {
		fetch(serviceUrl)
			.then((response) => response.text())
			.then((data) => {
				const selectedParagraphArray = data.split("");
				const testInfo = selectedParagraphArray.map(
					(selectedLetter) => {
						return {
							testLetter: selectedLetter,
							status: "notAttempted",
						};
					}
				);
				// Update the testInfo in state
				this.setState({
					...defaultState,
					selectedParagraph: data,
					testInfo,
				});
			});
	};

	componentDidMount() {
		this.fetchNewParagraphFallback();
	}

	startTimer = () => {
		this.setState({ timerStarted: true });
		const timer = setInterval(() => {
			if (this.state.timeRemaining > 0) {
				// Change the WPM and Time Remaining
				const timeSpent = TotalTime - this.state.timeRemaining;
				const speed =
					timeSpent > 0
						? (this.state.word / timeSpent) * TotalTime
						: 0;
				this.setState({
					timeRemaining: this.state.timeRemaining - 1,
					speed: parseInt(speed),
				});
			} else {
				clearInterval(timer);
			}
		}, 1000);
	};

	startAgain = () => this.fetchNewParagraphFallback();

	handleUserInput = (inputValue) => {
		// alert('Handle User Input Called');
		// console.log("Handle User Input", inputValue);
		if (!this.state.timerStarted) this.startTimer();

		const character = inputValue.length;
		const word = inputValue.split(" ").length;
		const index = character - 1;

		if (index < 0) {
			this.setState({
				testInfo: [
					{
						testLetter: this.state.testInfo[0].testLetter,
						status: "notAttempted",
					},
					...this.state.testInfo.slice(1),
				],
				character,
				word,
			});

			return;
		}

		if (index >= this.state.selectedParagraph.length) {
			this.setState({
				character,
				word,
			});
			return;
		}

		// Make a copy
		const testInfo = this.state.testInfo;
		if (!(index === this.state.selectedParagraph.length - 1))
			testInfo[index + 1].status = "notAttempted";

		// Check for mistake
		const isMistake = inputValue[index] === testInfo[index].testLetter;

		// Update the testInfo
		testInfo[index].status = isMistake ? "correct" : "incorrect";

		// Update the state
		this.setState({
			testInfo,
			word,
			character,
		});
	};

	render() {
		console.log(this.state.testInfo);
		return (
			<div className="app">
				{/* Nav */}
				<Navbar />
				{/* Landing */}
				<Landing />
				{/* Challenge */}
				<Challenge
					selectedParagraph={this.state.selectedParagraph}
					word={this.state.word}
					character={this.state.character}
					speed={this.state.speed}
					timeRemaining={this.state.timeRemaining}
					timerStarted={this.state.timerStarted}
					testInfo={this.state.testInfo}
					onInputChange={this.handleUserInput}
					startAgain={this.startAgain}
				/>
				{/* Footer */}
				<Footer />
			</div>
		);
	}
}

export default App;
