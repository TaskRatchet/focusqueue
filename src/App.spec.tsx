import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import App from "./App";

vi.mock("./lib/speak");

describe("App", () => {
  it("renders", () => {
    render(<App />);
  });
});
