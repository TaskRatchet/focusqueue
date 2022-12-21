import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { loginWithGoogle } from "./lib/firebase/auth";

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
    userEvent.click(loginButton);
    await waitFor(() => expect(loginWithGoogle).toHaveBeenCalled());
  });
});
