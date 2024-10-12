import { describe, expect, it } from "vitest";
import { getUnixTime } from "./index.js";

describe("getUnixTime", () => {
  it("returns the timestamp of the given date", () => {
    const timestamp = 1483228800000;
    const result = getUnixTime(new Date(timestamp));
    expect(result).toBe(1483228800);
  });

  it("accepts a timestamp (and returns it unchanged)", () => {
    const timestamp = 804643200000;
    const result = getUnixTime(timestamp);
    expect(result).toBe(804643200);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getUnixTime(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("seconds timestamp handles negative numbers", () => {
    expect(getUnixTime(new Date(1001))).toBe(1);
    expect(getUnixTime(new Date(-1001))).toBe(-1);
  });

  it("should return the same value if the inputs are the same in terms of seconds", () => {
    const date1 = getUnixTime(new Date("1960-01-01T00:00:00.2Z"))
    const date2 = getUnixTime(new Date("1960-01-01T00:00:00Z"))

    expect(date1).toBe(date2)
  });
});
