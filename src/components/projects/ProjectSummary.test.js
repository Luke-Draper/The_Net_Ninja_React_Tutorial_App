import React from "react";
import ProjectSummary from "./ProjectSummary";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("ProjectSummary renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<ProjectSummary />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
