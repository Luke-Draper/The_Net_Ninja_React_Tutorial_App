import React from "react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("Navbar renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<Navbar />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
