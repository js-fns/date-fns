import { describe, expect, it } from "vitest";
import { addDecades } from "./index.js";

describe("addDecades", () => {
  it("adds the given number of decades to the specified date", () => {
    const result = addDecades(new Date(2014, 8 /* Sep */, 1), 2);
    expect(result).toEqual(new Date(2034, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const result = addDecades(new Date(2014, 8 /* Sep */, 1).getTime(), 3);
    expect(result).toEqual(new Date(2044, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2016, 5 /* July */, 11);
    addDecades(date, 1);
    expect(date).toEqual(new Date(2016, 5 /* July */, 11));
  });

  it("handles the leap years properly", () => {
    const result = addDecades(new Date(2016, 1 /* Feb */, 29), 1);
    expect(result).toEqual(new Date(2026, 1 /* Feb */, 28));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addDecades(new Date(NaN), 3);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addDecades(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
