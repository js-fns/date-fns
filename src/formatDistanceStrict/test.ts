import { describe, expect, it } from "vitest";
import type { FormatDistanceFn } from "../locale/types.js";
import { formatDistanceStrict } from "./index.js";
import { TZDate, tz } from "@date-fns/tz";

describe("formatDistanceStrict", () => {
  describe("seconds", () => {
    describe("when no unit is set", () => {
      it("0 seconds", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 5),
          new Date(1986, 3, 4, 10, 32, 5),
        );
        expect(result).toBe("0 seconds");
      });

      it("5 seconds", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 5),
        );
        expect(result).toBe("5 seconds");
      });
    });
  });

  describe("minutes", () => {
    it("1 minute", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 0),
      );
      expect(result).toBe("1 minute");
    });

    it("n minutes", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 35, 0),
      );
      expect(result).toBe("3 minutes");
    });
  });

  describe("hours", () => {
    it("1 hour", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0),
      );
      expect(result).toBe("1 hour");
    });

    it("n hours", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 13, 32, 0),
      );
      expect(result).toBe("3 hours");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 5, 10, 32, 0),
      );
      expect(result).toBe("1 day");
    });

    it("n days", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 7, 10, 32, 0),
      );
      expect(result).toBe("3 days");
    });
  });

  describe("weeks", () => {
    describe("when the includeWeeks option is true", () => {
      it("1 week", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 11, 10, 32, 0),
          { includeWeeks: true },
        );
        expect(result).toBe("1 week");
      });
      it("n weeks", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 25, 10, 32, 0),
          { includeWeeks: true },
        );
        expect(result).toBe("3 weeks");
      });
    });
  });

  describe("months", () => {
    it("1 month", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 4, 4, 10, 32, 0),
      );
      expect(result).toBe("1 month");
    });

    it("n months", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 6, 4, 10, 32, 0),
      );
      expect(result).toBe("3 months");
    });
  });

  describe("years", () => {
    it("returns `1 year` - see issue 2388", () => {
      const result = formatDistanceStrict(
        new Date(2015, 0, 2),
        new Date(2016, 0, 1),
      );
      expect(result).toBe("1 year");
    });

    it("returns `2 years` - see issue 2388", () => {
      const result = formatDistanceStrict(
        new Date(2014, 0, 2),
        new Date(2016, 0, 1),
      );
      expect(result).toBe("2 years");
    });

    it("1 year", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("1 year");
    });

    it("n years", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1991, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("5 years");
    });
  });

  describe("when the unit option is supplied", () => {
    describe("second", () => {
      it("0 seconds", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "second" },
        );
        expect(result).toBe("0 seconds");
      });

      it("5 seconds", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 5),
          { unit: "second" },
        );
        expect(result).toBe("5 seconds");
      });

      it("120 seconds", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 34, 0),
          { unit: "second" },
        );
        expect(result).toBe("120 seconds");
      });
    });

    describe("minute", () => {
      it("0 minutes", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "minute" },
        );
        expect(result).toBe("0 minutes");
      });

      it("5 minutes", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 37, 0),
          { unit: "minute" },
        );
        expect(result).toBe("5 minutes");
      });

      it("120 minutes", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 12, 32, 0),
          { unit: "minute" },
        );
        expect(result).toBe("120 minutes");
      });
    });

    describe("hour", () => {
      it("0 hours", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "hour" },
        );
        expect(result).toBe("0 hours");
      });

      it("5 hours", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 15, 32, 0),
          { unit: "hour" },
        );
        expect(result).toBe("5 hours");
      });

      it("48 hours", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 6, 10, 32, 0),
          { unit: "hour" },
        );
        expect(result).toBe("48 hours");
      });
    });

    describe("day", () => {
      it("0 days", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "day" },
        );
        expect(result).toBe("0 days");
      });

      it("5 days", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 9, 10, 32, 0),
          { unit: "day" },
        );
        expect(result).toBe("5 days");
      });

      it("60 days", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 5, 3, 10, 32, 0),
          { unit: "day" },
        );
        expect(result).toBe("60 days");
      });
    });

    describe("weeks", () => {
      describe("when the includeWeeks option is true", () => {
        it("0 weeks", () => {
          const result = formatDistanceStrict(
            new Date(1986, 3, 4, 10, 32, 0),
            new Date(1986, 3, 4, 10, 32, 0),
            { includeWeeks: true, unit: "week" },
          );
          expect(result).toBe("0 weeks");
        });

        it("2 weeks", () => {
          const result = formatDistanceStrict(
            new Date(1986, 3, 4, 10, 32, 0),
            new Date(1986, 3, 18, 10, 32, 0),
            { includeWeeks: true, unit: "week" },
          );
          expect(result).toBe("2 weeks");
        });

        it("4 weeks", () => {
          const result = formatDistanceStrict(
            new Date(1986, 3, 4, 10, 32, 0),
            new Date(1986, 3, 32, 10, 32, 0),
            { includeWeeks: true, unit: "week" },
          );
          expect(result).toBe("4 weeks");
        });
      });
    });

    describe("month", () => {
      it("0 months", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "month" },
        );
        expect(result).toBe("0 months");
      });

      it("5 months", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 7, 4, 10, 32, 0),
          { unit: "month" },
        );
        expect(result).toBe("4 months");
      });

      it("12 months - see issue 2388", () => {
        const result = formatDistanceStrict(
          new Date(1986, 7, 4, 10, 32, 0),
          new Date(1985, 7, 4, 10, 32, 0),
          { unit: "month" },
        );
        expect(result).toBe("12 months");
      });

      it("24 months", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1988, 3, 4, 10, 32, 0),
          { unit: "month" },
        );
        expect(result).toBe("24 months");
      });
    });

    describe("year", () => {
      it("0 years", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "year" },
        );
        expect(result).toBe("0 years");
      });

      it("5 years", () => {
        const result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1991, 3, 4, 15, 32, 0),
          { unit: "year" },
        );
        expect(result).toBe("5 years");
      });
    });
  });

  it("accepts timestamps", () => {
    const result = formatDistanceStrict(
      new Date(1986, 3, 4, 10, 32, 0).getTime(),
      new Date(1986, 3, 4, 11, 32, 0).getTime(),
    );
    expect(result).toBe("1 hour");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 25),
        { addSuffix: true },
      );
      expect(result).toBe("25 seconds ago");
    });

    it("adds a future suffix", () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 11, 32, 0),
        new Date(1986, 3, 4, 10, 32, 0),
        { addSuffix: true },
      );
      expect(result).toBe("in 1 hour");
    });
  });

  describe("when the roundingMethod option is supplied", () => {
    it('default is "round"', () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 59),
      );
      expect(result).toBe("2 minutes");
    });

    it('"floor"', () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 59),
        { roundingMethod: "floor" },
      );
      expect(result).toBe("1 minute");
    });

    it('"ceil"', () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 1),
        { roundingMethod: "ceil" },
      );
      expect(result).toBe("2 minutes");
    });

    it('"round" (down)', () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 29),
        { roundingMethod: "round" },
      );
      expect(result).toBe("1 minute");
    });

    it('"round" (up)', () => {
      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 30),
        { roundingMethod: "round" },
      );
      expect(result).toBe("2 minutes");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const formatDistance: FormatDistanceFn = (token, count, options) => {
        expect(token).toBe("xSeconds");
        expect(count).toBe(25);
        expect(options!.addSuffix).toBe(true);
        expect(options!.comparison!).toBeLessThan(0);
        return "It works!";
      };

      const customLocale = {
        formatDistance,
      };

      const result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 25),
        {
          addSuffix: true,
          locale: customLocale,
        },
      );

      expect(result).toBe("It works!");
    });
  });

  describe("edge cases", () => {
    it("detects unit correctly for short months", () => {
      const result = formatDistanceStrict(
        new Date(2018, 1 /* Feb */, 1),
        new Date(2018, 2 /* Mar */, 1),
      );
      expect(result).toBe("28 days");
    });
  });

  it("throws `RangeError` if the first date is `Invalid Date`", () => {
    expect(
      formatDistanceStrict.bind(
        null,
        new Date(NaN),
        new Date(1986, 3, 7, 10, 32, 0),
      ),
    ).toThrow(RangeError);
  });

  it("throws `RangeError` if the second date is `Invalid Date`", () => {
    expect(
      formatDistanceStrict.bind(
        null,
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(NaN),
      ),
    ).toThrow(RangeError);
  });

  it("throws `RangeError` if the both dates are `Invalid Date`", () => {
    expect(
      formatDistanceStrict.bind(null, new Date(NaN), new Date(NaN)),
    ).toThrow(RangeError);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2023, 5, 1, "Asia/Singapore");
    const dateRight = new TZDate(2023, 11, 1, "America/New_York");
    expect(formatDistanceStrict(dateLeft, dateRight)).toEqual("6 months");
    expect(formatDistanceStrict(dateRight, dateLeft)).toBe("6 months");
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      formatDistanceStrict(start, end);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        formatDistanceStrict("2024-04-10T07:00:00Z", "2024-04-12T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }),
      ).toEqual("2 days");
      expect(
        formatDistanceStrict("2024-04-10T07:00:00Z", "2024-04-12T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toEqual("2 days");
    });
  });
});
