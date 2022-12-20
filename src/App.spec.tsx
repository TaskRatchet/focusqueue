import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import login from "./lib/taiga/login";
import getProjectsList from "./lib/taiga/getProjectsList";

vi.mock("./lib/taiga/login");
vi.mock("./lib/taiga/getProjectsList");

const user = userEvent.setup();

describe("App", () => {
  it("logs in", async () => {
    render(<App />);

    const u = screen.getByLabelText("username");
    const p = screen.getByLabelText("password");

    await user.type(u, "user");
    await user.type(p, "pass");

    user.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(login).toBeCalledWith("user", "pass");
    });
  });

  it.only("gets projects", async () => {
    vi.mocked(login).mockResolvedValue("the token");
    render(<App />);

    const u = screen.getByLabelText("username");
    const p = screen.getByLabelText("password");

    await user.type(u, "user");
    await user.type(p, "pass");

    user.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(getProjectsList).toBeCalledWith("the token");
    });
  });

  it("displays projects", async () => {
    vi.mocked(login).mockResolvedValue("the token");
    vi.mocked(getProjectsList).mockResolvedValue([{ id: 0, name: "foobar" }]);

    render(<App />);

    const u = screen.getByLabelText("username");
    const p = screen.getByLabelText("password");

    await user.type(u, "user");
    await user.type(p, "pass");

    user.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(getProjectsList).toBeCalledWith("the token");
    });

    expect(await screen.findByText("foobar"));
  });
});
