import React from "react";
import SignUp from "./SignUp";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("SignUp renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<SignUp />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
