import React from "react";
import SignedInLinks from "./SignedInLinks";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("SignedInLinks renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<SignedInLinks />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
