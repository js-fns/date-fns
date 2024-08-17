import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { getDstTransitions } from "../../test/dst/tzOffsetTransitions.js";
import { addDays } from "./index.js";

describe("addDays", () => {
  it("adds the given number of days", () => {
    const result = addDays(new Date(2014, 8 /* Sep */, 1), 10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 11));
  });

  it("accepts a timestamp", () => {
    const result = addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 11));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    addDays(date, 11);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addDays(new Date(NaN), 10);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addDays(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  const dstTransitions = getDstTransitions(2017);
  const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip;
  const tzName =
    Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
  const HOUR = 1000 * 60 * 60;
  const MINUTE = 1000 * 60;
  // It's usually 1 hour, but for some timezones, e.g. Australia/Lord_Howe, it is 30 minutes
  const dstOffset =
    dstTransitions.start && dstTransitions.end
      ? (dstTransitions.end.getTimezoneOffset() -
          dstTransitions.start.getTimezoneOffset()) *
        MINUTE
      : NaN;

  dstOnly(
    `works at DST-start boundary in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = dstTransitions.start;
      const result = addDays(date!, 1);
      expect(result).toEqual(new Date(date!.getTime() + 24 * HOUR));
    },
  );

  dstOnly(
    `works at DST-start - 30 mins in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = new Date(dstTransitions.start!.getTime() - 0.5 * HOUR);
      const result = addDays(date, 1);
      // started before the transition so will only be 23 hours later in local time
      expect(result).toEqual(new Date(date.getTime() + 24 * HOUR - dstOffset));
    },
  );

  dstOnly(
    `works at DST-start - 60 mins in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = new Date(dstTransitions.start!.getTime() - 1 * HOUR);
      const result = addDays(date, 1);
      // started before the transition so will only be 23 hours later in local time
      expect(result).toEqual(new Date(date.getTime() + 24 * HOUR - dstOffset));
    },
  );

  dstOnly(
    `works at DST-end boundary in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = dstTransitions.end;
      const result = addDays(date!, 1);
      expect(result).toEqual(new Date(date!.getTime() + 24 * HOUR));
    },
  );

  dstOnly(
    `works at DST-end - 30 mins in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = new Date(dstTransitions.end!.getTime() - 0.5 * HOUR);
      const result = addDays(date, 1);
      // started before the transition so will be 25 hours later in local
      // time because one hour repeats after DST ends.
      expect(result).toEqual(new Date(date.getTime() + 24 * HOUR + dstOffset));
    },
  );

  dstOnly(
    `works at DST-end - 60 mins in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = new Date(dstTransitions.end!.getTime() - 1 * HOUR);
      const result = addDays(date, 1);
      // started before the transition so will be 25 hours later in local
      // time because one hour repeats after DST ends.
      expect(result).toEqual(new Date(date.getTime() + 24 * HOUR + dstOffset));
    },
  );

  dstOnly(
    `doesn't mutate if zero increment is used: ${tzName || "(unknown)"}`,
    () => {
      const date = new Date(dstTransitions.end!);
      const result = addDays(date, 0);
      expect(result).toEqual(date);
    },
  );

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        addDays("2024-04-10T07:00:00Z", 10, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-20T15:00:00.000+08:00");
      expect(
        addDays("2024-04-10T07:00:00Z", 10, {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-20T00:00:00.000-07:00");
    });
  });
});
