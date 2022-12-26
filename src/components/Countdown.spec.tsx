import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import Countdown from "./Countdown";
import userEvent from "@testing-library/user-event";
import speak from "../lib/speak";
import React from "react";

vi.mock("../lib/speak");

// Use this function instead of userEvent.click() to avoid
// advancing timers before the click event is fired.
const clickInstant = (name: string | RegExp) =>
  act(() =>
    screen
      .getByRole("button", {
        name,
      })
      .click()
  );

describe("Countdown", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("uses given time for countdown", async () => {
    render(<Countdown />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:01");

    await clickInstant(/Start/);

    expect(await screen.findByText("00:01")).toBeInTheDocument();
  });

  it("waits until start click before updating countdown", async () => {
    const { rerender } = render(<Countdown />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:05");

    vi.advanceTimersByTime(1000);

    rerender(<Countdown />);

    expect(screen.getByText("00:00")).toBeInTheDocument();
  });

  it("has pause button", async () => {
    render(<Countdown />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:01");
    await clickInstant("Start");

    expect(await screen.findByText("Pause")).toBeInTheDocument();
  });

  it("pauses countdown", async () => {
    render(<Countdown />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:05");

    await clickInstant("Start");

    vi.runOnlyPendingTimers();
    vi.advanceTimersByTime(900);

    await clickInstant("Pause");

    await screen.findByText("Start");

    vi.advanceTimersByTime(5000);

    expect(screen.getByText("00:04")).toBeInTheDocument();
  });

  it("resumes countdown", async () => {
    const { rerender } = render(<Countdown />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:05");

    // start timer
    await clickInstant("Start");

    vi.runOnlyPendingTimers();

    // pause timer
    await clickInstant("Pause");

    // confirm paused
    await screen.findByText("Start");
    vi.advanceTimersByTime(1000);
    rerender(<Countdown />);
    expect(screen.getByText("00:04")).toBeInTheDocument();

    // resume timer
    await clickInstant("Start");

    // confirm resumed
    await screen.findByText("Pause");
    vi.advanceTimersByTime(1000);
    rerender(<Countdown />);
    expect(screen.getByText("00:03")).toBeInTheDocument();
  });

  it("has reset button", async () => {
    render(<Countdown />);

    expect(await screen.findByText("Reset")).toBeInTheDocument();
  });

  it("resets timer when reset button clicked", async () => {
    const { rerender } = render(<Countdown />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:05");

    await clickInstant("Start");

    vi.runOnlyPendingTimers();
    vi.advanceTimersByTime(1000);

    rerender(<Countdown />);

    await clickInstant("Reset");

    rerender(<Countdown />);

    expect(screen.getByText("00:05")).toBeInTheDocument();
  });

  it("pauses timer on reset", async () => {
    const { rerender } = render(<Countdown />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:05");

    await clickInstant("Start");

    vi.runOnlyPendingTimers();
    vi.advanceTimersByTime(1000);

    rerender(<Countdown />);

    await clickInstant("Reset");

    rerender(<Countdown />);

    expect(screen.getByText("Start")).toBeInTheDocument();
  });

  it('says "done" when countdown completes', async () => {
    render(<Countdown />);

    const user = userEvent.setup({
      advanceTimers: () => vi.runOnlyPendingTimers(),
    });

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Time"));
    await user.type(screen.getByLabelText("Time"), "00:01");

    await clickInstant("Start");

    vi.runOnlyPendingTimers();
    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(speak).toBeCalled();
    });
  });
});
