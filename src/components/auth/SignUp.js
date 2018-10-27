import React, { Component } from "react";

class SignUp extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className="container SignUp">
				<form onSubmit={this.handleSubmit} className="white">
					<div className="input-field">
						<label htmlFor="first-name">First Name</label>
						<input type="text" id="first-name" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="last-name">Last Name</label>
						<input type="text" id="last-name" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn red lighten-1 z-depth-0">Sign Up</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
