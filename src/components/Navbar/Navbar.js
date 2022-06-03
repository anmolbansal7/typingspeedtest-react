import React from "react";
import logo from "./../../assets/typing.png";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="nav-main">
			<div className="nav-left">
				<img className="logo" src={logo} alt="logo"></img>
				<p className="logo-text">Typing Speed Test</p>
			</div>
			<div className="nav-right">
				<a
					href="https://anmolbansal.com"
					target="_blank"
					rel="noreferrer"
					className="link"
				>
					Anmol Bansal
				</a>
			</div>
		</div>
	);
};

export default Navbar;
