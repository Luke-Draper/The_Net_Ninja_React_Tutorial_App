import React from "react";
import Notifications from "./Notifications";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("Notifications renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<Notifications />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
