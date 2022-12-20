/// <reference types="vitest" />
import { vi } from "vitest";
import matchers, {
  TestingLibraryMatchers,
} from "@testing-library/jest-dom/matchers";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

const m: TestingLibraryMatchers<string, void> = matchers;

// extends Vitest's expect method with methods from react-testing-library
expect.extend(m);

vi.mock("axios");
vi.mock("./src/lib/speak");

afterEach(() => {
  cleanup();
});
