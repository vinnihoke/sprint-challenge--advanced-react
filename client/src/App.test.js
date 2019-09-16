import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayerList from "./components/PlayerList";
import { render, act } from "@testing-library/react";

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
  const { getByText } = render(<PlayerList />);
  getByText("Alex Morgan");
});

test("Test if something is present with TestID", () => {
  // Give an element this data-testid="<id>"
  const { getByTestId } = render(<App />);
  getByTestId(/PlayerList/i);
});

test("Check if useFetch() worked", () => {
  const { container } = render(<PlayerList />);
  container.getByText("alex morgan");
});
