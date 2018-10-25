import React from "react";
import SignedOutLinks from "./SignedOutLinks";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("SignedOutLinks renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<SignedOutLinks />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
