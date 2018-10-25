import React from "react";
import CreateProject from "./CreateProject";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("CreateProject renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<CreateProject />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
