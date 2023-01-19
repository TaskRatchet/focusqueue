import { vi } from "vitest";
import matchers, {
  TestingLibraryMatchers,
} from "@testing-library/jest-dom/matchers";
import { expect, afterEach, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { loginWithGoogle } from "./src/lib/firebase/auth";
import getEnvValue from "./src/lib/getEnvValue";
import { getCards } from "./src/lib/trello";

const m: TestingLibraryMatchers<string, void> = matchers;

// extends Vitest's expect method with methods from react-testing-library
expect.extend(m);

vi.mock("axios");
vi.mock("./src/lib/speak");
vi.mock("./src/lib/firebase/app");
vi.mock("./src/lib/firebase/auth");
vi.mock("./src/lib/firebase/firestore");
vi.mock("./src/lib/getEnvValue");
vi.mock("./src/lib/trello");

beforeEach(() => {
  vi.mocked(loginWithGoogle).mockResolvedValue({} as any);
  vi.mocked(getEnvValue).mockImplementation((k: string, d?: unknown) => {
    return d ? d : `THE_${k}_ENV_VALUE`;
  });
  vi.mocked(getCards).mockResolvedValue([]);
});

afterEach(() => {
  localStorage.clear();
  cleanup();
});
