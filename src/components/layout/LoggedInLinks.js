import React from "react";
import { NavLink } from "react-router-dom";

const LoggedInLinks = () => {
	return (
		<ul className="right LoggedInLinks">
			<li>
				<NavLink to="/">New Project</NavLink>
			</li>
			<li>
				<NavLink to="/">Log Out</NavLink>
			</li>
			<li>
				<NavLink to="/" className="btn btn-floating red lighten-1">
					LD
				</NavLink>
			</li>
		</ul>
	);
};

export default LoggedInLinks;
