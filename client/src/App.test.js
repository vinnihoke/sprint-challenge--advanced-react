import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import PlayerList from "./components/PlayerList";
import { waitForElement } from "@testing-library/react";

describe("Checking within App", () => {
  test("App renders without crashing", () => {
    rtl.render(<App />);
  });

  test("App contains Alex Morgan", async () => {
    const wrapper = rtl.render(<App />);
    const player = await waitForElement(() =>
      wrapper.queryByText(/alex morgan/i)
    );
    expect(player).toBeTruthy();
  });
  test("App contains Megan Rapinoe", async () => {
    const wrapper = rtl.render(<App />);
    const player = await waitForElement(() =>
      wrapper.queryByText(/megan rapinoe/i)
    );
    expect(player).toBeTruthy();
  });
  test("App contains Carli Lloyd", async () => {
    const wrapper = rtl.render(<App />);
    const player = await waitForElement(() =>
      wrapper.queryByText(/carli lloyd/i)
    );
    expect(player).toBeTruthy();
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
