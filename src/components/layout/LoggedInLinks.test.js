import React from "react";
import LoggedInLinks from "./LoggedInLinks";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("LoggedInLinks renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<LoggedInLinks />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
