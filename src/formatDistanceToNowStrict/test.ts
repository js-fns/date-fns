import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { FormatDistanceFn } from "../locale/types.js";
import { formatDistanceToNowStrict } from "./index.js";

describe("formatDistanceToNowStrict", () => {
  fakeDate(new Date(1986, 3, 4, 10, 32, 0));

  describe("seconds", () => {
    describe("when no unit is set", () => {
      it("0 seconds", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
        );
        expect(result).toBe("0 seconds");
      });

      it("5 seconds", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 5),
        );
        expect(result).toBe("5 seconds");
      });
    });
  });

  describe("minutes", () => {
    it("1 minute", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 0));
      expect(result).toBe("1 minute");
    });

    it("n minutes", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 35, 0));
      expect(result).toBe("3 minutes");
    });
  });

  describe("hours", () => {
    it("1 hour", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 4, 11, 32, 0));
      expect(result).toBe("1 hour");
    });

    it("n hours", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 4, 13, 32, 0));
      expect(result).toBe("3 hours");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 5, 10, 32, 0));
      expect(result).toBe("1 day");
    });

    it("n days", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 7, 10, 32, 0));
      expect(result).toBe("3 days");
    });
  });

  describe("weeks", () => {
    describe("when the includeWeeks option is true", () => {
      it("1 week", () => {
        const result = formatDistanceToNowStrict(new Date(1986, 2, 26, 10, 32, 0),
          { includeWeeks: true },
        );
        expect(result).toBe("1 week");
      });
      it("n weeks", () => {
        const result = formatDistanceToNowStrict(new Date(1986, 2, 12, 10, 32, 0),
          { includeWeeks: true },
        );
        expect(result).toBe("3 weeks");
      });
    });
  });

  describe("months", () => {
    it("1 month", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 4, 4, 10, 32, 0));
      expect(result).toBe("1 month");
    });

    it("n months", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 6, 4, 10, 32, 0));
      expect(result).toBe("3 months");
    });
  });

  describe("years", () => {
    it("1 year", () => {
      const result = formatDistanceToNowStrict(new Date(1987, 3, 4, 10, 32, 0));
      expect(result).toBe("1 year");
    });

    it("n years", () => {
      const result = formatDistanceToNowStrict(new Date(1991, 3, 4, 10, 32, 0));
      expect(result).toBe("5 years");
    });
  });

  describe("when the unit option is supplied", () => {
    describe("second", () => {
      it("0 seconds", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "second" },
        );
        expect(result).toBe("0 seconds");
      });

      it("5 seconds", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 5),
          { unit: "second" },
        );
        expect(result).toBe("5 seconds");
      });

      it("120 seconds", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 34, 0),
          { unit: "second" },
        );
        expect(result).toBe("120 seconds");
      });
    });

    describe("minute", () => {
      it("0 minutes", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "minute" },
        );
        expect(result).toBe("0 minutes");
      });

      it("5 minutes", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 37, 0),
          { unit: "minute" },
        );
        expect(result).toBe("5 minutes");
      });

      it("120 minutes", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 12, 32, 0),
          { unit: "minute" },
        );
        expect(result).toBe("120 minutes");
      });
    });

    describe("hour", () => {
      it("0 hours", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "hour" },
        );
        expect(result).toBe("0 hours");
      });

      it("5 hours", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 15, 32, 0),
          { unit: "hour" },
        );
        expect(result).toBe("5 hours");
      });

      it("48 hours", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 6, 10, 32, 0),
          { unit: "hour" },
        );
        expect(result).toBe("48 hours");
      });
    });

    describe("day", () => {
      it("0 days", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "day" },
        );
        expect(result).toBe("0 days");
      });

      it("5 days", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 9, 10, 32, 0),
          { unit: "day" },
        );
        expect(result).toBe("5 days");
      });

      it("60 days", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 5, 3, 10, 32, 0),
          { unit: "day" },
        );
        expect(result).toBe("60 days");
      });
    });

    describe("weeks", () => {
      describe("when the includeWeeks option is true", () => {
        it("0 weeks", () => {
          const result = formatDistanceToNowStrict(
            new Date(1986, 3, 4, 10, 32, 0),
            { includeWeeks: true, unit: "week" },
          );
          expect(result).toBe("0 weeks");
        });

        it("2 weeks", () => {
          const result = formatDistanceToNowStrict(
            new Date(1986, 3, 18, 10, 32, 0),
            { includeWeeks: true, unit: "week" },
          );
          expect(result).toBe("2 weeks");
        });

        it("4 weeks", () => {
          const result = formatDistanceToNowStrict(
            new Date(1986, 3, 32, 10, 32, 0),
            { includeWeeks: true, unit: "week" },
          );
          expect(result).toBe("4 weeks");
        });
      });
    })

    describe("month", () => {
      it("0 months", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "month" },
        );
        expect(result).toBe("0 months");
      });

      it("5 months", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 7, 4, 10, 32, 0),
          { unit: "month" },
        );
        expect(result).toBe("4 months");
      });

      it("24 months", () => {
        const result = formatDistanceToNowStrict(
          new Date(1988, 3, 4, 10, 32, 0),
          { unit: "month" },
        );
        expect(result).toBe("24 months");
      });
    });

    describe("year", () => {
      it("returns `1 year` - see issue 2388", () => {
        const result = formatDistanceToNowStrict(
          new Date(1985, 3, 4, 10, 32, 0),
        );
        expect(result).toBe("1 year");
      });

      it("returns `2 years` - see issue 2388", () => {
        const result = formatDistanceToNowStrict(
          new Date(1984, 3, 4, 10, 32, 0),
        );
        expect(result).toBe("2 years");
      });

      it("0 years", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "year" },
        );
        expect(result).toBe("0 years");
      });

      it("5 years", () => {
        const result = formatDistanceToNowStrict(
          new Date(1991, 3, 4, 15, 32, 0),
          { unit: "year" },
        );
        expect(result).toBe("5 years");
      });
    });
  });

  it("accepts timestamps", () => {
    const result = formatDistanceToNowStrict(
      new Date(1986, 3, 4, 11, 32, 0).getTime(),
    );
    expect(result).toBe("1 hour");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 31, 35),
        {
          addSuffix: true,
        },
      );
      expect(result).toBe("25 seconds ago");
    });

    it("adds a future suffix", () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 11, 32, 0),
        {
          addSuffix: true,
        },
      );
      expect(result).toBe("in 1 hour");
    });
  });

  describe("when the roundingMethod option is supplied", () => {
    it('default is "round"', () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 33, 59),
      );
      expect(result).toBe("2 minutes");
    });

    it('"floor"', () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 33, 59),
        {
          roundingMethod: "floor",
        },
      );
      expect(result).toBe("1 minute");
    });

    it('"ceil"', () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 33, 1),
        {
          roundingMethod: "ceil",
        },
      );
      expect(result).toBe("2 minutes");
    });

    it('"round" (down)', () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 33, 29),
        {
          roundingMethod: "round",
        },
      );
      expect(result).toBe("1 minute");
    });

    it('"round" (up)', () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 33, 30),
        {
          roundingMethod: "round",
        },
      );
      expect(result).toBe("2 minutes");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        expect(token).toBe("xSeconds");
        expect(count).toBe(15);
        expect(options!.addSuffix).toBe(true);
        expect(options!.comparison!).toBeLessThan(0);
        return "It works!";
      };

      const customLocale = {
        formatDistance: localizeDistance,
      };

      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 31, 45),
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
      const result = formatDistanceToNowStrict(new Date(1986, 2 /* Mar */, 7));
      expect(result).toBe("28 days");
    });
  });

  it("throws `RangeError` if the date is `Invalid Date`", () => {
    expect(formatDistanceToNowStrict.bind(null, new Date(NaN))).toThrow(
      RangeError,
    );
  });

  it("respects date extensions", () => {
    const result = formatDistanceToNowStrict(
      new UTCDate(+new Date(1986, 3, 4, 10, 32, 5)),
    );
    expect(result).toBe("5 seconds");
  });
});
