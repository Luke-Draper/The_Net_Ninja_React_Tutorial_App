import React from "react";

const ProjectDetails = props => {
	const id = props.match.params.id;
	return (
		<div className="container section ProjectDetails">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title : {id}</span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ex
						quae enim soluta cum, consequuntur provident cupiditate tenetur sunt
						dignissimos? Quidem delectus atque quaerat cupiditate quisquam sit
						amet dolore ratione.
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by : Luke Draper</div>
					<div>September 2nd, 17:00</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
