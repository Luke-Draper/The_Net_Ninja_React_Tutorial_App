import React from "react";
import App from "./App";
import { MemoryRouter } from "react-router-dom"; //Required when component uses a Route or Link
import renderer from "react-test-renderer";

test("App renders without crashing", () => {
	const component = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<App />
		</MemoryRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
});
