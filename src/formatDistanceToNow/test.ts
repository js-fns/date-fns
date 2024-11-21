import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { FormatDistanceFn } from "../locale/types.js";
import { formatDistanceToNow } from "./index.js";

describe("formatDistanceToNow", () => {
  fakeDate(new Date(1986, 3, 4, 10, 32, 0));

  describe("seconds", () => {
    describe("when the includeSeconds option is true", () => {
      it("less than 5 seconds", () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 58), {
          includeSeconds: true,
        });
        expect(result).toBe("less than 5 seconds");
      });

      it("less than 10 seconds", () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 52), {
          includeSeconds: true,
        });
        expect(result).toBe("less than 10 seconds");
      });

      it("less than 20 seconds", () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 45), {
          includeSeconds: true,
        });
        expect(result).toBe("less than 20 seconds");
      });

      it("half a minute", () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 35), {
          includeSeconds: true,
        });
        expect(result).toBe("half a minute");
      });

      it("less than a minute", () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 15), {
          includeSeconds: true,
        });
        expect(result).toBe("less than a minute");
      });

      it("1 minute", () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 0), {
          includeSeconds: true,
        });
        expect(result).toBe("1 minute");
      });
    });
  });

  describe("minutes", () => {
    it("less than a minute", () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 40));
      expect(result).toBe("less than a minute");
    });

    it("1 minute", () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 10));
      expect(result).toBe("1 minute");
    });

    it("n minutes", () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 29, 10));
      expect(result).toBe("3 minutes");
    });
  });

  describe("hours", () => {
    it("about 1 hour", () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 9, 32, 0));
      expect(result).toBe("about 1 hour");
    });

    it("about n hours", () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 7, 32, 0));
      expect(result).toBe("about 3 hours");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistanceToNow(new Date(1986, 3, 3, 10, 32, 0));
      expect(result).toBe("1 day");
    });

    it("n days", () => {
      const result = formatDistanceToNow(new Date(1986, 3, 1, 10, 32, 0));
      expect(result).toBe("3 days");
    });
  });

  describe("weeks", () => {
    describe("when the includeWeeks option is true", () => {
      it("about 1 week", () => {
        const result = formatDistanceToNow(new Date(1986, 2, 26, 10, 32, 0),
          { includeWeeks: true },
        );
        expect(result).toBe("about 1 week");
      });
      it("n weeks", () => {
        const result = formatDistanceToNow(new Date(1986, 2, 12, 10, 32, 0),
          { includeWeeks: true },
        );
        expect(result).toBe("3 weeks");
      });
    });
  });

  describe("months", () => {
    it("about 1 month", () => {
      const result = formatDistanceToNow(new Date(1986, 2, 4, 10, 32, 0));
      expect(result).toBe("about 1 month");
    });

    it("n months", () => {
      const result = formatDistanceToNow(new Date(1986, 0, 4, 10, 32, 0));
      expect(result).toBe("3 months");
    });
  });

  describe("years", () => {
    it("about 1 year", () => {
      const result = formatDistanceToNow(new Date(1985, 3, 4, 10, 32, 0));
      expect(result).toBe("about 1 year");
    });

    it("over 1 year", () => {
      const result = formatDistanceToNow(new Date(1984, 10, 4, 10, 32, 0));
      expect(result).toBe("over 1 year");
    });

    it("almost n years", () => {
      const result = formatDistanceToNow(new Date(1983, 4, 4, 10, 32, 0));
      expect(result).toBe("almost 3 years");
    });

    it("about n years", () => {
      const result = formatDistanceToNow(new Date(1983, 3, 4, 10, 32, 0));
      expect(result).toBe("about 3 years");
    });

    it("over n years", () => {
      const result = formatDistanceToNow(new Date(1982, 10, 4, 10, 32, 0));
      expect(result).toBe("over 3 years");
    });
  });

  it("accepts a timestamp", () => {
    const result = formatDistanceToNow(
      new Date(1986, 3, 4, 10, 31, 40).getTime(),
    );
    expect(result).toBe("less than a minute");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 35), {
        includeSeconds: true,
        addSuffix: true,
      });
      expect(result).toBe("half a minute ago");
    });

    it("adds a future suffix", () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 11, 32, 0), {
        addSuffix: true,
      });
      expect(result).toBe("in about 1 hour");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        expect(token).toBe("aboutXHours");
        expect(count).toBe(1);
        expect(options!.addSuffix).toBe(true);
        expect(options!.comparison!).toBeGreaterThan(0);
        return "It works!";
      };

      const customLocale = {
        formatDistance: localizeDistance,
      };

      const result = formatDistanceToNow(new Date(1986, 3, 4, 11, 32, 0), {
        addSuffix: true,
        locale: customLocale,
      });

      expect(result).toBe("It works!");
    });
  });

  it("throws RangeError if the passed date is `Invalid Date`", function () {
    expect(formatDistanceToNow.bind(null, new Date(NaN))).toThrow(RangeError);
  });

  it("respects date extensions", () => {
    const result = formatDistanceToNow(
      new UTCDate(+new Date(1986, 3, 4, 9, 32, 0)),
    );
    expect(result).toBe("about 1 hour");
  });
});
