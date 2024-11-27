import { describe, expect, it } from "vitest";
import { formatDuration } from "./index.js";

describe("formatDuration", () => {
  it("formats full duration", () => {
    expect(formatDuration({
      years: 2,
      months: 9,
      weeks: 1,
      days: 7,
      hours: 5,
      minutes: 9,
      seconds: 30,
    })).toBe("2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds");
  });

  it("formats partial duration", () => {
    expect(formatDuration({ months: 9, days: 2 })).toBe("9 months 2 days");
  });

  it("allows to customize the format", () => {
    expect(formatDuration(
      {
        years: 2,
        months: 9,
        weeks: 1,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30,
      },
      { format: ["months", "weeks"] },
    )).toBe("9 months 1 week");
  });

  it("does not include zeros by default", () => {
    expect(formatDuration({
      years: 0,
      months: 0,
      weeks: 1,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })).toBe("1 week");
  });

  it("allows to include zeros", () => {
    expect(formatDuration(
      {
        years: 0,
        months: 0,
        weeks: 1,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      { zero: true },
    )).toBe("0 years 0 months 1 week 0 days 0 hours 0 minutes 0 seconds");
  });

  it("allows to customize the delimiter", () => {
    expect(formatDuration({ months: 9, days: 2 }, { delimiter: ", " })).toBe("9 months, 2 days");
  });

  it("formats full duration with a maximum of 2 units", () => {
    expect(formatDuration(
      {
        years: 2,
        months: 9,
        weeks: 1,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30,
      },
      { maxUnits: 2 },
    )).toBe("2 years 9 months");
  });

  it("formats a duration with gaps and a maximum of 2 units", () => {
    expect(formatDuration(
      {
        months: 9,
        hours: 5,
      },
      { maxUnits: 2 },
    )).toBe("9 months 5 hours");
  });

  it("formats partial duration with a maximum of 3 units", () => {
    expect(formatDuration({ months: 9, days: 2 },  { maxUnits: 3 })).toBe("9 months 2 days");
  });

  it("formats custom format duration with a maximum of 2 units", () => {
    expect(formatDuration(
      {
        years: 2,
        months: 9,
        weeks: 3,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30,
      },
      { maxUnits: 2, format: ["months", "weeks", "hours"] },
    )).toBe("9 months 3 weeks");
  });

  it("allows to include zeros with a maximum of 2 units", () => {
    expect(formatDuration(
      {
        years: 0,
        months: 1,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      { maxUnits: 2, zero: true },
    )).toBe("0 years 1 month");
  });
});
