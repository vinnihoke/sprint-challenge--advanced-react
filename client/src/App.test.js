import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import * as rtl from "@testing-library/react";
// import "jest-dom/extend-expect";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders without crashing", () => {
  //Arrange, Act, Assert
  render(<App />);
});

test("Check for Alex Morgan, Megan Rapinoe, and Carli Lloyd", () => {
  const { getByText } = render(<App />);
  // IMPORTANT
  // wrapper.getByText() returns either the node, or **FAILS THE TEST** outright:
  expect(getByText(/Alex Morgan/i));
});

test("Test if something is present with TestID", () => {
  // Give an element this data-testid="<id>"
  const { getByTestId } = render(<App />);
  getByTestId(/PlayerList/i);
});
