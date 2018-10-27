import React from "react";
import { Link } from "react-router-dom";
import LoggedInLinks from "./LoggedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
	return (
		<nav className="nav-wrapper grey darken-3 Navbar">
			<div className="container">
				<Link to="/" className="brand-logo">
					MarioPlan
				</Link>
				<LoggedInLinks />
				<SignedOutLinks />
			</div>
		</nav>
	);
};

export default Navbar;
