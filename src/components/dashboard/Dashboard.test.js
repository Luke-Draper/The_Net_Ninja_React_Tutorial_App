import React from "react";
import Dashboard from "./Dashboard";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("Dashboard renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<Dashboard />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
