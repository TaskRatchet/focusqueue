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

  it("loads next task in estimation page if users marks task as complete", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test\nanother");
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

    await userEvent.click(
      screen.getByRole("button", { name: /Mark task as complete/i })
    );

    expect(await screen.findByText(/How long would/)).toBeInTheDocument();
  });

  it("returns to estimate page if user opts to keep working on current task", async () => {
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

    await userEvent.click(
      screen.getByRole("button", { name: /Keep working on the same task/i })
    );

    expect(await screen.findByText(/How long would/)).toBeInTheDocument();
  });

  it("returns to estimate page if user opts to start a new task", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test\nanother");
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

    await userEvent.click(screen.getByRole("button", { name: /next task/i }));

    expect(await screen.findByText(/How long would/)).toBeInTheDocument();
  });

  it("removes task from queue when marked as completed", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test\nanother");
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

    await userEvent.click(
      screen.getByRole("button", { name: /Mark task as complete/i })
    );

    expect(screen.queryByText(/test/i)).not.toBeInTheDocument();
  });

  it("returns user to dump page if all tasks completed", async () => {
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

    await userEvent.click(
      screen.getByRole("button", { name: /Mark task as complete/i })
    );

    expect(await screen.findByText(/What would you like/i)).toBeInTheDocument();
  });

  it('shows user next task when they click "next task" button', async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test\nanother");
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

    await userEvent.click(screen.getByRole("button", { name: /next task/i }));

    expect(await screen.findByText(/another/i)).toBeInTheDocument();
  });

  it("cycles back to first task when end of tasks is reached", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test\nanother");
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

    await userEvent.click(screen.getByRole("button", { name: /next task/i }));

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await userEvent.click(
      screen.getByRole("button", { name: /finish session/i })
    );

    await userEvent.click(screen.getByRole("button", { name: /next task/i }));

    expect(await screen.findByText(/test/i)).toBeInTheDocument();
  });

  it("does not show user a task they previously completed", async () => {
    render(<App />);

    userEvent.setup();

    await userEvent.type(screen.getByRole("textbox"), "test\nanother");
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

    // submit 'test' estimate
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // finish 'test' session
    await userEvent.click(
      screen.getByRole("button", { name: /finish session/i })
    );

    // mark 'test' as complete
    await userEvent.click(
      screen.getByRole("button", { name: /Mark task as complete/i })
    );

    // submit 'another' estimate
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // finish 'another' session
    await userEvent.click(
      screen.getByRole("button", { name: /finish session/i })
    );

    // ask for next task in queue
    await userEvent.click(screen.getByRole("button", { name: /next task/i }));

    // expect to be sent to the dump screen
    expect(await screen.findByText(/What would you like/i)).toBeInTheDocument();
  });
});
