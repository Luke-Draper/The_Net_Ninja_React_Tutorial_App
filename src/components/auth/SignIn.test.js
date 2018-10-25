import React from "react";
import SignIn from "./SignIn";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("SignIn renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<SignIn />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
