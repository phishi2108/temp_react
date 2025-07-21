import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("should load BUTTON INSIDE CONATCT component", () => {
	render(<Contact />);

	const button = screen.getByRole("button");

	expect(button).toBeInTheDocument();
});
test("input boxes load krega", () => {
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes);


})
