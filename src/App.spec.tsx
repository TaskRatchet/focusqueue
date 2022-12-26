import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { loginWithGoogle } from "./lib/firebase/auth";
import React from "react";

vi.mock("./lib/speak");

describe("App", () => {
  it("renders", () => {
    render(<App />);
  });

  it("has login with google button", async () => {
    render(<App />);
    await screen.findByText(/login with google/i);
  });

  it("uses firebase auth to log in with Google", async () => {
    render(<App />);
    userEvent.setup();
    const loginButton = await screen.findByText(/login with google/i);
    await userEvent.click(loginButton);
    await waitFor(() => expect(loginWithGoogle).toHaveBeenCalled());
  });

  it("does not show flow if user not logged in", async () => {
    render(<App />);
    await waitFor(() =>
      expect(screen.queryByText(/what would you like/i)).not.toBeInTheDocument()
    );
  });

  it("shows flow if user is logged in", async () => {
    vi.mocked(loginWithGoogle).mockResolvedValue({} as any);

    render(<App />);

    const loginButton = await screen.findByText(/login with google/i);

    await userEvent.click(loginButton);

    await waitFor(() =>
      expect(screen.queryByText(/what would you like/i)).toBeInTheDocument()
    );
  });

  it("does not show login button if logged in", async () => {
    render(<App />);
    const loginButton = await screen.findByText(/login with google/i);
    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.queryByText(/login with google/i)).not.toBeInTheDocument();
    });
  });

  it("persists auth on refresh", async () => {
    render(<App />);
    const loginButton = await screen.findByText(/login with google/i);
    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.queryByText(/login with google/i)).not.toBeInTheDocument();
    });
    render(<App />);
    await waitFor(() => {
      expect(screen.queryByText(/login with google/i)).not.toBeInTheDocument();
    });
  });

  it("lets user log out", async () => {
    render(<App />);
    const loginButton = await screen.findByText(/login with google/i);
    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.queryByText(/login with google/i)).not.toBeInTheDocument();
    });
    const logoutButton = await screen.findByText(/logout/i);
    await userEvent.click(logoutButton);
    await waitFor(() => {
      expect(screen.queryByText(/login with google/i)).toBeInTheDocument();
    });
  });
});
