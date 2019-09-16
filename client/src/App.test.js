import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import PlayerList from "./components/PlayerList";

describe("Checking within App", () => {
  test("App renders without crashing", () => {
    rtl.render(<App />);
  });

  test("App contains specific Players", () => {
    const wrapper = rtl.render(<App />);
    // const player = wrapper.queryByText(/alex morgan/i);
    // expect(player).toBeTruthy();
    console.log(wrapper.debug());
  });

  test("App contains title", () => {
    const wrapper = rtl.render(<App />);
    const h1 = wrapper.getByText(/Womens World Cup Players/i);
    expect(h1).toBeInTheDocument();
  });
});

describe("Checking within PlayerList", () => {
  test("Loading Fired?", () => {
    const wrapper = rtl.render(<PlayerList />);
    const element = wrapper.queryByText(/loading/i);
    expect(element).toBeInTheDocument();
  });
});

// test("Check for Alex Morgan, Megan Rapinoe, and Carli Lloyd", () => {
//   const { getByText } = render(<PlayerList />);
//   getByText("Alex Morgan");
// });

// test("Test if something is present with TestID", () => {
//   // Give an element this data-testid="<id>"
//   const { getByTestId } = render(<App />);
//   getByTestId(/PlayerList/i);
// });

// test("Check if useFetch() worked", () => {
//   const { container } = render(<PlayerList />);
//   container.getByText("alex morgan");
// });
