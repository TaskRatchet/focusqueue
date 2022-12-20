import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

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

  it("has countdown", async () => {
    render(<App />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:00");
    await user.click(screen.getByRole("button"));

    expect(await screen.findByText("00:00")).toBeInTheDocument();
  });

  it("uses given time for countdown", async () => {
    render(<App />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:01");
    await user.click(screen.getByRole("button"));

    expect(await screen.findByText("00:01")).toBeInTheDocument();
  });
});

// TODO
// countdown
