import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("has task input", () => {
    render(<App />);

    expect(screen.getByLabelText("Task")).toBeInTheDocument();
  });
});

// TODO
// task input
// time input
// submit button
// countdown
