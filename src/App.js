import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import CreateProject from "./components/projects/CreateProject";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/login" component={LogIn} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/project/:id" component={ProjectDetails} />
						<Route exact path="/create" component={CreateProject} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
