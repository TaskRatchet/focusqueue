import { vi } from "vitest";
import matchers, {
  TestingLibraryMatchers,
} from "@testing-library/jest-dom/matchers";
import { expect, afterEach, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { loginWithGoogle } from "@services/firebase/auth";
import getEnvValue from "./src/lib/getEnvValue";
import { getCards } from "@services/trello";

const m: TestingLibraryMatchers<string, void> = matchers;

// extends Vitest's expect method with methods from react-testing-library
expect.extend(m);

vi.mock("axios");
vi.mock("./src/lib/speak");
vi.mock("@services/firebase/app");
vi.mock("@services/firebase/auth");
vi.mock("@services/firebase/firestore");
vi.mock("./src/lib/getEnvValue");
vi.mock("@services/trello");

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
