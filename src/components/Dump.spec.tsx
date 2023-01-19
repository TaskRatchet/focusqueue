import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Dump from "./Dump";
import { State } from "../App.reducer";
import userEvent from "@testing-library/user-event";
import { authenticate, getCards, getBoards } from "../lib/trello";
import { updateMe } from "../lib/firebase/firestore";
import { useMe } from "../lib/firebase/firestore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const state: State = {
  tasks: ["task1", "task2"],
  mode: "dump",
  currentTask: 0,
  sessionLength: "05:00",
};

const dispatch = vi.fn();

const renderComponent = () => {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <Dump state={state} dispatch={dispatch} />
    </QueryClientProvider>
  );
};

describe("Dump", () => {
  beforeEach(() => {
    vi.mocked(useMe).mockReset();
    vi.mocked(getBoards).mockResolvedValue([]);
  });

  it("has trello button", async () => {
    renderComponent();

    await screen.findByText(/trello/i);
  });

  it("authenticates user with trello", async () => {
    renderComponent();

    const user = userEvent.setup();

    const trelloButton = await screen.findByText(/trello/i);

    user.click(trelloButton);

    await waitFor(() => expect(authenticate).toHaveBeenCalled());
  });

  it("stores trello token in firebase", async () => {
    // set the token
    // http://localhost:5173/#token=123
    Object.defineProperty(window, "location", {
      value: {
        hash: "#token=123",
      },
    });

    renderComponent();

    await waitFor(() => expect(updateMe).toHaveBeenCalled());
  });

  it("does not authenticate user with trello if already authenticated", async () => {
    vi.mocked(useMe).mockReturnValue({
      trelloToken: "123",
    } as any);

    renderComponent();

    const user = userEvent.setup();

    const trelloButton = await screen.findByText(/trello/i);

    user.click(trelloButton);

    expect(authenticate).not.toHaveBeenCalled();
  });

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

    renderComponent();

    const user = userEvent.setup();

    const trelloButton = await screen.findByText(/trello/i);

    user.click(trelloButton);

    expect(updateMe).not.toHaveBeenCalled();
  });

  it("ignores non-token hashes", async () => {
    Object.defineProperty(window, "location", {
      value: {
        hash: "#random=123",
      },
    });

    renderComponent();

    await screen.findByText(/trello/i);

    expect(updateMe).not.toHaveBeenCalled();
  });

  it("gets user boards", async () => {
    vi.mocked(useMe).mockReturnValue({
      trelloToken: "123",
    } as any);

    renderComponent();

    const user = userEvent.setup();

    const trelloButton = await screen.findByText(/trello/i);

    user.click(trelloButton);

    await waitFor(() => expect(getBoards).toHaveBeenCalledWith("123"));
  });

  // it("lists user boards", async () => {
  //   vi.mocked(useMe).mockReturnValue({
  //     trelloToken: "123",
  //   } as any);

  //   vi.mocked(getBoards).mockResolvedValue([
  //     {
  //       id: "1",
  //       name: "board1",
  //     },
  //   ]);

  //   render(<Dump state={state} dispatch={dispatch} />);

  //   const user = userEvent.setup();

  //   const trelloButton = await screen.findByText(/trello/i);

  //   user.click(trelloButton);

  //   await waitFor(() => expect(getBoards).toHaveBeenCalledWith("123"));

  //   await waitFor(() => {
  //     expect(screen.getByText(/board1/i)).toBeInTheDocument();
  //   });
  // });
});

// pops trello import modal
// shows list of trello boards
// shows list of trello lists
// imports all cards from lists into flow
