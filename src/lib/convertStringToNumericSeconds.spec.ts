import { describe, expect, it } from "vitest";
import convertStringToNumericSeconds from "./convertStringToNumericSeconds";

describe("convertHourStringToNumber", () => {
  it("parses string to seconds", () => {
    const result = convertStringToNumericSeconds("00:01");
    const result2 = convertStringToNumericSeconds("02:00");

    expect(result).toEqual(1);
    expect(result2).toEqual(120);
  });
});
