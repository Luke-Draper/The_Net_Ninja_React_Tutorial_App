import React from "react";
import ProjectList from "./ProjectList";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("ProjectList renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<ProjectList />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
