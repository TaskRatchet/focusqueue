import { describe, it, expect, vi } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import Countdown from "./Countdown";
import userEvent from "@testing-library/user-event";
import speak from "@lib/speak";
import React from "react";
import { __advance, __complete, __reset } from "@bradgarropy/use-countdown";

vi.mock("@lib/speak");
vi.mock("@bradgarropy/use-countdown");

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
  it("uses given time for countdown", async () => {
    render(<Countdown />);

    const user = userEvent.setup();
    const taskInput = screen.getByLabelText("Task");

    await user.type(taskInput, "test");
    await user.clear(screen.getByLabelText("Duration"));
    await user.type(screen.getByLabelText("Duration"), "00:01");

    await screen.findByRole("button", { name: "Start" });

    clickInstant(/Start/);

    expect(await screen.findByText("00:01")).toBeInTheDocument();
  });

  it("waits until start click before updating countdown", async () => {
    render(<Countdown />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Duration"));
    await user.type(screen.getByLabelText("Duration"), "00:05");

    expect(__reset).not.toBeCalled();

    user.click(screen.getByRole("button", { name: "Start" }));

    await waitFor(() => {
      expect(__reset).toBeCalled();
    });
  });

  it("has pause button", async () => {
    render(<Countdown />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Duration"));
    await user.type(screen.getByLabelText("Duration"), "00:01");

    clickInstant("Start");

    expect(await screen.findByText("Pause")).toBeInTheDocument();
  });

  it("pauses countdown", async () => {
    render(<Countdown />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Duration"));
    await user.type(screen.getByLabelText("Duration"), "00:05");

    clickInstant("Start");

    await screen.findByText("Pause");

    clickInstant("Pause");

    await screen.findByText("Start");
  });

  it("resumes countdown", async () => {
    render(<Countdown />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Duration"));
    await user.type(screen.getByLabelText("Duration"), "00:05");

    // start timer
    clickInstant("Start");

    // pause timer
    clickInstant("Pause");

    // confirm paused
    await screen.findByText("Start");

    // resume timer
    clickInstant("Start");

    // confirm resumed
    await screen.findByText("Pause");
  });

  it("has reset button", async () => {
    render(<Countdown />);

    expect(await screen.findByText("Reset")).toBeInTheDocument();
  });

  it("resets timer when reset button clicked", async () => {
    render(<Countdown />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Duration"));
    await user.type(screen.getByLabelText("Duration"), "00:05");

    clickInstant("Start");

    __advance(1);

    await screen.findByText("00:04");

    clickInstant("Reset");

    expect(screen.getByText("00:05")).toBeInTheDocument();
  });

  it("pauses timer on reset", async () => {
    render(<Countdown />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Duration"));
    await user.type(screen.getByLabelText("Duration"), "00:05");

    clickInstant("Start");
    clickInstant("Reset");

    expect(screen.getByText("Start")).toBeInTheDocument();
  });

  it('says "done" when countdown completes', async () => {
    render(<Countdown />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Task"), "test");
    await user.clear(screen.getByLabelText("Duration"));
    await user.type(screen.getByLabelText("Duration"), "00:01");

    clickInstant("Start");

    __complete();

    await waitFor(() => {
      expect(speak).toBeCalled();
    });
  });
});
