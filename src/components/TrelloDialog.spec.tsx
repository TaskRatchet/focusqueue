import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import TrelloDialog from "./TrelloDialog";
import { AppContext } from "@/App";
import { initialState } from "@/App.reducer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getBoards } from "@services/trello";
import userEvent from "@testing-library/user-event";
import { useMe } from "@services/firebase/firestore";
import React from "react";

vi.mock("@services/trello");

const queryClient = new QueryClient();

describe("trello", () => {
  it("renders", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={[initialState, vi.fn()]}>
          <TrelloDialog />
        </AppContext.Provider>
      </QueryClientProvider>
    );
  });

  it("checks off selection", async () => {
    vi.mocked(useMe).mockReturnValue({
      trelloToken: "the_token",
    } as any);

    vi.mocked(getBoards).mockResolvedValue([
      {
        id: "1",
        name: "foo",
      },
      {
        id: "2",
        name: "bar",
      },
    ]);

    render(
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={[initialState, vi.fn()]}>
          <TrelloDialog />
        </AppContext.Provider>
      </QueryClientProvider>
    );

    const user = userEvent.setup();

    user.click(await screen.findByText(/import from trello/i));

    const item = await screen.findByLabelText("foo");

    user.click(item);

    await waitFor(() => expect(item).toBeChecked());
  });
});
