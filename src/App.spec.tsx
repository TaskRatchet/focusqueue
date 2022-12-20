import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import App from "./App";

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
});
