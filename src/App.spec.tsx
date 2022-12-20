import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

const clickInstant = (name?: string | RegExp) =>
  act(() =>
    screen
      .getByRole("button", {
        name,
      })
      .click()
  );

describe("App", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("uses given time for countdown", async () => {
    render(<App />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:01");

    await clickInstant();

    expect(await screen.findByText("00:01")).toBeInTheDocument();
  });

  it("waits until start click before updating countdown", async () => {
    const { rerender } = render(<App />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:05");

    vi.advanceTimersByTime(1000);

    rerender(<App />);

    expect(screen.getByText("00:00")).toBeInTheDocument();
  });

  it("has pause button", async () => {
    render(<App />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:01");
    await user.click(screen.getByRole("button"));

    expect(await screen.findByText("Pause")).toBeInTheDocument();
  });

  it("pauses countdown", async () => {
    const { rerender } = render(<App />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:05");
    await user.click(screen.getByRole("button"));

    vi.advanceTimersByTime(900);

    await clickInstant();

    await screen.findByText("Start");

    vi.advanceTimersByTime(5000);

    expect(screen.getByText("00:04")).toBeInTheDocument();
  });
});

// TODO
// countdown
