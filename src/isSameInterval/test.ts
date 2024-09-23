import { describe, expect, it } from "vitest";
import { isSameInterval } from "./index.js";

describe("isSameInterval", () => {
  it("returns true if the given intervals are equal", () => {
    const result = isSameInterval(
      {
        start: new Date(2024, 1 /* Feb */, 10),
        end: new Date(2024, 1 /* Feb */, 20),
      },
      {
        start: new Date(2024, 1 /* Feb */, 10),
        end: new Date(2024, 1 /* Feb */, 20),
      },
    );
    expect(result).toBe(true);
  });

  it("returns false if the given intervals are not equal", () => {
    const result = isSameInterval(
      {
        start: new Date(2024, 1 /* Feb */, 10),
        end: new Date(2024, 1 /* Feb */, 20),
      },
      {
        start: new Date(2024, 1 /* Feb */, 11),
        end: new Date(2024, 1 /* Feb */, 20),
      },
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameInterval(
      {
        start: new Date(2024, 1 /* Feb */, 10).getTime(),
        end: new Date(2024, 1 /* Feb */, 20).getTime(),
      },
      {
        start: new Date(2024, 1 /* Feb */, 10).getTime(),
        end: new Date(2024, 1 /* Feb */, 20).getTime(),
      },
    );
    expect(result).toBe(true);
  });

  it("returns false if the first interval start is `Invalid Date`", () => {
    const result = isSameInterval(
      {
        start: new Date(NaN),
        end: new Date(2024, 1 /* Feb */, 20),
      },
      {
        start: new Date(2024, 1 /* Feb */, 10),
        end: new Date(2024, 1 /* Feb */, 20),
      },
    );
    expect(result).toBe(false);
  });
  it("returns false if the first interval end is `Invalid Date`", () => {
    const result = isSameInterval(
      {
        start: new Date(2024, 1 /* Feb */, 10),
        end: new Date(NaN),
      },
      {
        start: new Date(2024, 1 /* Feb */, 10),
        end: new Date(2024, 1 /* Feb */, 20),
      },
    );
    expect(result).toBe(false);
  });

  it("returns false if the second interval start is `Invalid Date`", () => {
    const result = isSameInterval(
      {
        start: new Date(2024, 1 /* Feb */, 10),
        end: new Date(2024, 1 /* Feb */, 20),
      },
      {
        start: new Date(NaN),
        end: new Date(2024, 1 /* Feb */, 20),
      },
    );
    expect(result).toBe(false);
  });
  it("returns false if the second interval end is `Invalid Date`", () => {
    const result = isSameInterval(
      {
        start: new Date(2024, 1 /* Feb */, 10),
        end: new Date(2024, 1 /* Feb */, 20),
      },
      {
        start: new Date(2024, 1 /* Feb */, 10),
        end: new Date(NaN),
      },
    );
    expect(result).toBe(false);
  });
});
