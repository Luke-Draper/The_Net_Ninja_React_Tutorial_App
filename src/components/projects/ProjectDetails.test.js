import React from "react";
import ProjectDetails from "./ProjectDetails";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("ProjectDetails renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<ProjectDetails />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
