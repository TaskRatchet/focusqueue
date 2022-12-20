import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("has task input", () => {
    render(<App />);

    expect(screen.getByLabelText("Task")).toBeInTheDocument();
  });

  it("has time input", () => {
    render(<App />);

    expect(screen.getByLabelText("Time")).toBeInTheDocument();
  });

  it("has start button", () => {
    render(<App />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

// TODO
// task input
// time input
// start button
// countdown
