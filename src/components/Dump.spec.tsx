import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Dump from "./Dump";
import { State } from "./Flow.reducer";
import userEvent from "@testing-library/user-event";
import { authenticate, getCards, getBoards } from "../lib/trello";
import { updateMe } from "../lib/firebase/firestore";
import { useMe } from "../lib/firebase/firestore";

const state: State = {
  tasks: ["task1", "task2"],
  mode: "dump",
  currentTask: 0,
  sessionLength: "05:00",
};

const dispatch = vi.fn();

describe("Dump", () => {
  beforeEach(() => {
    vi.mocked(useMe).mockReset();
  });

  it("has trello button", async () => {
    render(<Dump state={state} dispatch={dispatch} />);

    await screen.findByText(/trello/i);
  });

  // authenticates user with trello
  it("authenticates user with trello", async () => {
    render(<Dump state={state} dispatch={dispatch} />);

    const user = userEvent.setup();

    const trelloButton = await screen.findByText(/trello/i);

    user.click(trelloButton);

    await waitFor(() => expect(authenticate).toHaveBeenCalled());
  });

  // stores trello token in firebase
  it("stores trello token in firebase", async () => {
    // set the token
    // http://localhost:5173/#token=123
    Object.defineProperty(window, "location", {
      value: {
        hash: "#token=123",
      },
    });

    render(<Dump state={state} dispatch={dispatch} />);

    await waitFor(() => expect(updateMe).toHaveBeenCalled());
  });

  // imports trello tasks into flow
  it("imports trello tasks into flow", async () => {
    vi.mocked(useMe).mockReturnValue({
      trelloToken: "123",
    } as any);

    render(<Dump state={state} dispatch={dispatch} />);

    const user = userEvent.setup();

    const trelloButton = await screen.findByText(/trello/i);

    user.click(trelloButton);

    await waitFor(() => expect(getCards).toHaveBeenCalledWith("123"));
  });

  // does not authenticate user with trello if already authenticated
  it("does not authenticate user with trello if already authenticated", async () => {
    vi.mocked(useMe).mockReturnValue({
      trelloToken: "123",
    } as any);

    render(<Dump state={state} dispatch={dispatch} />);

    const user = userEvent.setup();

    const trelloButton = await screen.findByText(/trello/i);

    user.click(trelloButton);

    await waitFor(() => expect(getCards).toHaveBeenCalledWith("123"));

    expect(authenticate).not.toHaveBeenCalled();
  });

  // does not store trello token in firebase if same as stored token
  it("does not store trello token in firebase if same as stored token", async () => {
    vi.mocked(useMe).mockReturnValue({
      trelloToken: "123",
    } as any);

    // set query params to include trello token
    Object.defineProperty(window, "location", {
      value: {
        search: "?token=123",
      },
    });

    render(<Dump state={state} dispatch={dispatch} />);

    const user = userEvent.setup();

    const trelloButton = await screen.findByText(/trello/i);

    user.click(trelloButton);

    await waitFor(() => expect(getCards).toHaveBeenCalledWith("123"));

    expect(updateMe).not.toHaveBeenCalled();
  });

  it("appends Trello tasks to input", async () => {
    vi.mocked(useMe).mockReturnValue({
      trelloToken: "123",
    } as any);

    vi.mocked(getCards).mockResolvedValue([
      {
        id: "1",
        name: "trello_task",
      },
    ]);

    render(<Dump state={state} dispatch={dispatch} />);

    const user = userEvent.setup();

    const trelloButton = await screen.findByText(/trello/i);

    user.click(trelloButton);

    await waitFor(() => expect(getCards).toHaveBeenCalledWith("123"));

    await waitFor(() => {
      expect(dispatch).toBeCalledWith({
        type: "setTasks",
        payload: expect.stringContaining("trello_task"),
      });
    });
  });

  it("ignores non-token hashes", async () => {
    Object.defineProperty(window, "location", {
      value: {
        hash: "#random=123",
      },
    });

    render(<Dump state={state} dispatch={dispatch} />);

    await screen.findByText(/trello/i);

    expect(updateMe).not.toHaveBeenCalled();
  });

  it("gets user boards", async () => {
    vi.mocked(useMe).mockReturnValue({
      trelloToken: "123",
    } as any);

    render(<Dump state={state} dispatch={dispatch} />);

    const user = userEvent.setup();

    const trelloButton = await screen.findByText(/trello/i);

    user.click(trelloButton);

    await waitFor(() => expect(getBoards).toHaveBeenCalledWith("123"));
  });
});

// pops trello import modal
// shows list of trello boards
// shows list of trello lists
// imports all cards from lists into flow
