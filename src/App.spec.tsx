import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
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

  it("waits until start click before updating countdown", async () => {
    vi.useFakeTimers();

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

    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("has pause button", async () => {
    render(<App />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:01");
    await user.click(screen.getByRole("button"));

    expect(await screen.findByText("Pause")).toBeInTheDocument();
  });

  it.only("pauses countdown", async () => {
    vi.useFakeTimers();

    const { rerender } = render(<App />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    const b = screen.getByRole("button");

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:05");
    await user.click(b);

    vi.advanceTimersByTime(900);

    // Avoid using userEvent here, since userEvent.click() will
    // advance timers, which is not what we want.
    await act(() => b.click());

    await screen.findByText("Start");

    vi.advanceTimersByTime(5000);

    expect(screen.getByText("00:04")).toBeInTheDocument();

    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });
});

// TODO
// countdown
