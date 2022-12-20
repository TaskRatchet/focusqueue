import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

vi.mock("./lib/speak");

describe("App", () => {
  it("renders", () => {
    render(<App />);
  });

  it("asks for list of tasks", async () => {
    render(<App />);

    expect(await screen.findByText(/What would you like/)).toBeInTheDocument();
  });

  it("displays multiline input", async () => {
    render(<App />);

    expect(await screen.findByRole("textbox")).toBeInTheDocument();
  });

  it("has submit button", async () => {
    render(<App />);

    expect(
      await screen.findByRole("button", { name: /submit/i })
    ).toBeInTheDocument();
  });

  it("asks for time estimate for first task", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(await screen.findByText(/How long do/)).toBeInTheDocument();
  });

  it("does not ask for estimate before clicking submit", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");

    expect(screen.queryByText(/How long do/)).not.toBeInTheDocument();
  });

  it("displays text of task to estimate", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(await screen.findByText(/test/)).toBeInTheDocument();
  });

  it("accepts an estimate in mm:ss format", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /estimate/i,
      }),
      "1:30"
    );
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));
  });

  it("requests session length on estimation page", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(await screen.findByText(/How long would/)).toBeInTheDocument();
  });

  it("shows countdown after estimation is submitted", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /estimate/i,
      }),
      "1:30"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /session length/i,
      }),
      "1:30"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(await screen.findByDisplayValue(/1:30/)).toBeInTheDocument();
  });

  it("shows task text in countdown", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /estimate/i,
      }),
      "1:30"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /session length/i,
      }),
      "1:30"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(await screen.findByDisplayValue(/test/)).toBeInTheDocument();
  });

  it("shows the session duration on the clock", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /estimate/i,
      }),
      "1:30"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /session length/i,
      }),
      "1:30"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(await screen.findByText(/1:30/)).toBeInTheDocument();
  });

  it("allows user to mark task as complete after completing session", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /estimate/i,
      }),
      "1:30"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /session length/i,
      }),
      "1:30"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.click(
      screen.getByRole("button", { name: /finish session/i })
    );

    expect(
      await screen.findByText(/Mark task as complete/)
    ).toBeInTheDocument();
  });

  it("allows user to start a new session for the same task", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /estimate/i,
      }),
      "1:30"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /session length/i,
      }),
      "1:30"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.click(
      screen.getByRole("button", { name: /finish session/i })
    );

    expect(
      await screen.findByText(/Keep working on the same task/)
    ).toBeInTheDocument();
  });

  it("allows user to start a new session for a new task", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /estimate/i,
      }),
      "1:30"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: /session length/i,
      }),
      "1:30"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.click(
      screen.getByRole("button", { name: /finish session/i })
    );

    expect(await screen.findByText(/next task/i)).toBeInTheDocument();
  });
});
