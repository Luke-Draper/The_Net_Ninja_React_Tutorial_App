import React from "react";
import ProjectDetails from "./ProjectDetails";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("ProjectDetails renders without crashing", () => {
	const props = { match: { params: { id: 1 } } };
	const component = renderer.create(
		<MemoryRouter initialEntries={["/project/1"]}>
			<ProjectDetails {...props} />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
