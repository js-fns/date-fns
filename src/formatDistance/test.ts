import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { FormatDistanceFn } from "../locale/types.js";
import { formatDistance } from "./index.js";

describe("formatDistance", () => {
  describe("seconds", () => {
    describe("when the includeSeconds option is true", () => {
      it("less than 5 seconds", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          { includeSeconds: true },
        );
        expect(result).toBe("less than 5 seconds");
      });

      it("less than 10 seconds", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 7),
          { includeSeconds: true },
        );
        expect(result).toBe("less than 10 seconds");
      });

      it("less than 20 seconds", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 15),
          { includeSeconds: true },
        );
        expect(result).toBe("less than 20 seconds");
      });

      it("half a minute", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 25),
          { includeSeconds: true },
        );
        expect(result).toBe("half a minute");
      });

      it("less than a minute", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 45),
          { includeSeconds: true },
        );
        expect(result).toBe("less than a minute");
      });

      it("1 minute", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 33, 0),
          { includeSeconds: true },
        );
        expect(result).toBe("1 minute");
      });
    });
  });

  describe("minutes", () => {
    it("less than a minute", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 20),
      );
      expect(result).toBe("less than a minute");
    });

    it("1 minute", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 50),
      );
      expect(result).toBe("1 minute");
    });

    it("n minutes", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 34, 50),
      );
      expect(result).toBe("3 minutes");
    });
  });

  describe("hours", () => {
    it("about 1 hour", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0),
      );
      expect(result).toBe("about 1 hour");
    });

    it("about n hours", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 13, 32, 0),
      );
      expect(result).toBe("about 3 hours");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 5, 10, 32, 0),
      );
      expect(result).toBe("1 day");
    });

    it("n days", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 7, 10, 32, 0),
      );
      expect(result).toBe("3 days");
    });
  });

  describe("weeks", () => {
    describe("when the includeWeeks option is true", () => {
      it("about 1 week", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 11, 10, 32, 0),
          { includeWeeks: true },
        );
        expect(result).toBe("about 1 week");
      });
      it("n weeks", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 25, 10, 32, 0),
          { includeWeeks: true },
        );
        expect(result).toBe("3 weeks");
      });
    });
  });

  describe("months", () => {
    it("about 1 month", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 4, 4, 10, 32, 0),
      );
      expect(result).toBe("about 1 month");
    });

    it("n months", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 6, 4, 10, 32, 0),
      );
      expect(result).toBe("3 months");
    });
  });

  describe("years", () => {
    it("about 1 year", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("about 1 year");
    });

    it("over 1 year", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 9, 4, 10, 32, 0),
      );
      expect(result).toBe("over 1 year");
    });

    it("almost n years", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 2, 4, 10, 32, 0),
      );
      expect(result).toBe("almost 3 years");
    });

    it("about n years", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("about 3 years");
    });

    it("over n years", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 9, 4, 10, 32, 0),
      );
      expect(result).toBe("over 3 years");
    });
  });

  it("accepts timestamps", () => {
    const result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0).getTime(),
      new Date(1986, 3, 4, 11, 32, 0).getTime(),
    );
    expect(result).toBe("about 1 hour");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 25),
        { includeSeconds: true, addSuffix: true },
      );
      expect(result).toBe("half a minute ago");
    });

    it("adds a future suffix", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 11, 32, 0),
        new Date(1986, 3, 4, 10, 32, 0),
        { addSuffix: true },
      );
      expect(result).toBe("in about 1 hour");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        expect(token).toBe("lessThanXSeconds");
        expect(count).toBe(5);
        expect(options!.addSuffix).toBe(true);
        expect(options!.comparison!).toBeGreaterThan(0);
        return "It works!";
      };

      const customLocale = {
        formatDistance: localizeDistance,
      };

      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 3),
        new Date(1986, 3, 4, 10, 32, 0),
        {
          includeSeconds: true,
          addSuffix: true,
          locale: customLocale,
        },
      );

      expect(result).toBe("It works!");
    });
  });

  it("throws RangeError if the first date is `Invalid Date`", () => {
    expect(
      formatDistance.bind(null, new Date(NaN), new Date(1986, 3, 7, 10, 32, 0)),
    ).toThrow(RangeError);
  });

  it("throws RangeError if the second date is `Invalid Date`", () => {
    expect(
      formatDistance.bind(null, new Date(1986, 3, 4, 10, 32, 0), new Date(NaN)),
    ).toThrow(RangeError);
  });

  it("throws RangeError if the both dates are `Invalid Date`", () => {
    expect(formatDistance.bind(null, new Date(NaN), new Date(NaN))).toThrow(
      RangeError,
    );
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2023, 5, 1, "Asia/Singapore");
    const dateRight = new TZDate(2023, 11, 1, "America/New_York");
    expect(formatDistance(dateLeft, dateRight)).toEqual("6 months");
    expect(formatDistance(dateRight, dateLeft)).toBe("6 months");
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      formatDistance(start, end);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        formatDistance("2024-04-10T07:00:00Z", "2024-04-12T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }),
      ).toEqual("2 days");
      expect(
        formatDistance("2024-04-10T07:00:00Z", "2024-04-12T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toEqual("2 days");
    });
  });
});
