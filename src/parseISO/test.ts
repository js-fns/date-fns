import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { parseISO } from "./index.js";

describe("parseISO", () => {
  describe("string argument", () => {
    describe("years", () => {
      it("parses YY", () => {
        const result = parseISO("20");
        expect(result.getUTCFullYear()).toEqual(19);
      });
    });

    describe("years", () => {
      it("parses YYYY", () => {
        const result = parseISO("2014");
        expect(result).toEqual(new Date(2014, 0 /* Jan */, 1));
      });
    });

    describe("months", () => {
      it("parses YYYY-MM", () => {
        const result = parseISO("2014-02");
        expect(result).toEqual(new Date(2014, 1 /* Feb */, 1));
      });
    });

    describe("weeks", () => {
      it("parses YYYY-Www", () => {
        const result = parseISO("2014-W02");
        expect(result).toEqual(new Date(2014, 0 /* Jan */, 6));
      });

      it("parses YYYYWww", () => {
        const result = parseISO("2014W02");
        expect(result).toEqual(new Date(2014, 0 /* Jan */, 6));
      });
    });

    describe("calendar dates", () => {
      it("parses YYYY-MM-DD", () => {
        const result = parseISO("2014-02-11");
        expect(result).toEqual(new Date(2014, 1, /* Feb */ 11));
      });

      it("parses YYYYMMDD", () => {
        const result = parseISO("20140211");
        expect(result).toEqual(new Date(2014, 1 /* Feb */, 11));
      });
    });

    describe("week dates", () => {
      it("parses YYYY-Www-D", () => {
        const result = parseISO("2014-W02-7");
        expect(result).toEqual(new Date(2014, 0 /* Jan */, 12));
      });

      it("parses YYYYWwwD", () => {
        const result = parseISO("2014W027");
        expect(result).toEqual(new Date(2014, 0 /* Jan */, 12));
      });

      it("correctly handles years in which 4 January is Sunday", () => {
        const result = parseISO("2009-W01-1");
        expect(result).toEqual(new Date(2008, 11 /* Dec */, 29));
      });
    });

    describe("ordinal dates", () => {
      it("parses YYYY-DDD", () => {
        const result = parseISO("2014-026");
        expect(result).toEqual(new Date(2014, 0 /* Jan */, 26));
      });

      it("parses YYYYDDD", () => {
        const result = parseISO("2014026");
        expect(result).toEqual(new Date(2014, 0 /* Jan */, 26));
      });
    });

    describe("date and time combined", () => {
      it("parses YYYY-MM-DDThh:mm", () => {
        const result = parseISO("2014-02-11T11:30");
        expect(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30));
      });

      it("parses YYYY-MM-DDThhmm", () => {
        const result = parseISO("2014-02-11T1130");
        expect(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30));
      });
    });

    describe("extended century representation", () => {
      it("parses century 101 BC - 2 BC", () => {
        const result = parseISO("-0001");
        const date = new Date(0);
        date.setFullYear(-100, 0 /* Jan */, 1);
        date.setHours(0, 0, 0, 0);
        expect(result).toEqual(date);
      });

      it("parses century 1 BC - 99 AD", () => {
        const result = parseISO("00");
        const date = new Date(0);
        date.setFullYear(0, 0 /* Jan */, 1);
        date.setHours(0, 0, 0, 0);
        expect(result).toEqual(date);
      });

      it("parses centuries after 9999 AD", () => {
        const result = parseISO("+0123");
        expect(result).toEqual(new Date(12300, 0 /* Jan */, 1));
      });

      it("allows to specify the number of additional digits", () => {
        const result = parseISO("20", { additionalDigits: 0 });
        expect(result.getUTCFullYear()).toEqual(19);
      });
    });

    describe("extended year representation", () => {
      it("correctly parses years from 1 AD to 99 AD", () => {
        const result = parseISO("0095-07-02");
        const date = new Date(0);
        date.setFullYear(95, 6 /* Jul */, 2);
        date.setHours(0, 0, 0, 0);
        expect(result).toEqual(date);
      });

      it("parses years after 9999 AD", () => {
        const result = parseISO("+012345-07-02");
        expect(result).toEqual(new Date(12345, 6 /* Jul */, 2));
      });

      it("allows to specify the number of additional digits", () => {
        const result = parseISO("+12340702", { additionalDigits: 0 });
        expect(result).toEqual(new Date(1234, 6 /* Jul */, 2));
      });

      it("parses year 1 BC", () => {
        const result = parseISO("0000-07-02");
        const date = new Date(0);
        date.setFullYear(0, 6 /* Jul */, 2);
        date.setHours(0, 0, 0, 0);
        expect(result).toEqual(date);
      });

      it("parses years less than 1 BC", () => {
        const result = parseISO("-000001-07-02");
        const date = new Date(0);
        date.setFullYear(-1, 6 /* Jul */, 2);
        date.setHours(0, 0, 0, 0);
        expect(result).toEqual(date);
      });
    });

    describe("float time", () => {
      it("parses float hours", () => {
        const result = parseISO("2014-02-11T11.5");
        expect(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30));
      });

      it("parses float minutes", () => {
        const result = parseISO("2014-02-11T11:30.5");
        expect(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30, 30));
      });

      it("parses float seconds", () => {
        const result = parseISO("2014-02-11T11:30:30.768");
        expect(result).toEqual(
          new Date(2014, 1 /* Feb */, 11, 11, 30, 30, 768),
        );
      });

      it("parses , as decimal mark", () => {
        const result = parseISO("2014-02-11T11,5");
        expect(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30));
      });
    });

    describe("timezones", () => {
      describe("when the date and the time are specified", () => {
        it("parses Z", () => {
          const result = parseISO("2014-10-25T06:46:20Z");
          expect(result).toEqual(new Date("2014-10-25T13:46:20+07:00"));
        });

        it("parses ±hh:mm", () => {
          const result = parseISO("2014-10-25T13:46:20+07:00");
          expect(result).toEqual(new Date("2014-10-25T13:46:20+07:00"));
        });

        it("parses ±hhmm", () => {
          const result = parseISO("2014-10-25T03:46:20-0300");
          expect(result).toEqual(new Date("2014-10-25T13:46:20+07:00"));
        });

        it("parses ±hh", () => {
          const result = parseISO("2014-10-25T13:46:20+07");
          expect(result).toEqual(new Date("2014-10-25T13:46:20+07:00"));
        });
      });
      describe("when the year and the month are specified", () => {
        it("sets timezone correctly on yyyy-MMZ format", () => {
          const result = parseISO("2012-01Z");
          expect(result).toEqual(new Date("2012-01-01T00:00:00+00:00"));
        });
      });
    });

    describe("failure", () => {
      it("returns `Invalid Date` if the string is not an ISO formatted date", () => {
        const result = parseISO(new Date(2014, 8 /* Sep */, 1, 11).toString());
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });
    });
  });

  describe("validation", () => {
    describe("months", () => {
      it("returns `Invalid Date` for invalid month", () => {
        const result = parseISO("2014-00");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });
    });

    describe("weeks", () => {
      it("returns `Invalid Date` for invalid week", () => {
        const result = parseISO("2014-W00");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });

      it("returns `Invalid Date` for 54th week", () => {
        const result = parseISO("2014-W54");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });
    });

    describe("calendar dates", () => {
      it("returns `Invalid Date` for invalid day of the month", () => {
        const result = parseISO("2012-02-30");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });

      it("returns `Invalid Date` for 29th of February of non-leap year", () => {
        const result = parseISO("2014-02-29");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });

      it("parses 29th of February of leap year", () => {
        const result = parseISO("2012-02-29");
        expect(result).toEqual(new Date(2012, 1, /* Feb */ 29));
      });
    });

    describe("week dates", () => {
      it("returns `Invalid Date` for invalid day of the week", () => {
        const result = parseISO("2014-W02-0");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });
    });

    describe("ordinal dates", () => {
      it("returns `Invalid Date` for invalid day of the year", () => {
        const result = parseISO("2012-000");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });

      it("returns `Invalid Date` for 366th day of non-leap year", () => {
        const result = parseISO("2014-366");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });

      it("parses 366th day of leap year", () => {
        const result = parseISO("2012-366");
        expect(result).toEqual(new Date(2012, 11, /* Dec */ 31));
      });
    });

    describe("date", () => {
      it("returns `Invalid Date` when it contains spaces after the date", () => {
        const result = parseISO("2014-02-11  basketball");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });
    });

    describe("time", () => {
      it("parses 24:00 as midnight of the next day", () => {
        const result = parseISO("2014-02-11T24:00");
        expect(result).toEqual(new Date(2014, 1 /* Feb */, 12, 0, 0));
      });

      it("returns `Invalid Date` for anything after 24:00", () => {
        const result = parseISO("2014-02-11T24:01");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });

      it("returns `Invalid Date` for invalid hours", () => {
        const result = parseISO("2014-02-11T25");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });

      it("returns `Invalid Date` for invalid minutes", () => {
        const result = parseISO("2014-02-11T21:60");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });

      it("returns `Invalid Date` for invalid seconds", () => {
        const result = parseISO("2014-02-11T21:59:60");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });

      it("returns `Invalid Date` for invalid time", () => {
        const result = parseISO("2014-02-11T21:basketball");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });

      it("returns `Invalid Date` when it contains spaces after the time", () => {
        const result = parseISO("2014-02-11T21:59:00  basketball");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });
    });

    describe("timezones", () => {
      it("returns `Invalid Date` for invalid timezone minutes", () => {
        const result = parseISO("2014-02-11T21:35:45+04:60");
        expect(result instanceof Date).toBe(true);
        expect(isNaN(result.getTime())).toBe(true);
      });
    });
  });

  describe("invalid argument", () => {
    it("returns Invalid Date if argument is non-date string", () => {
      const result = parseISO("abc");
      expect(result instanceof Date).toBe(true);
      expect(isNaN(result.getTime())).toBe(true);
    });

    it("returns Invalid Date if argument is non-date string containing a colon", () => {
      const result = parseISO("00:00");
      expect(result instanceof Date).toBe(true);
      expect(isNaN(result.getTime())).toBe(true);
    });
  });

  it("resolves the date type by default", () => {
    const result = parseISO("2014-02-11T11:30:30");
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        parseISO("2024-04-10T00:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T08:00:00.000+08:00");
      expect(
        parseISO("2024-04-10T00:00:00+10:00", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-09T22:00:00.000+08:00");
      expect(
        parseISO("2024-04-10T00:00:00", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T00:00:00.000+08:00");
      expect(
        parseISO("2024-04-10T00:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-09T17:00:00.000-07:00");
      expect(
        parseISO("2024-04-10T00:00:00+10:00", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-09T07:00:00.000-07:00");
      expect(
        parseISO("2024-04-10T00:00:00", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-10T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = parseISO("2014-02-11T11:30:30", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });

  describe("time zones", () => {
    it("properly parses dates around DST transitions", () => {
      const ny = tz("America/New_York");
      expect(parseISO("2023-03-11T01:30", { in: ny }).toISOString()).toBe(
        "2023-03-11T01:30:00.000-05:00",
      );
      expect(parseISO("2023-03-12T01:30", { in: ny }).toISOString()).toBe(
        "2023-03-12T01:30:00.000-05:00",
      );
      expect(parseISO("2023-03-12T02:00", { in: ny }).toISOString()).toBe(
        "2023-03-12T03:00:00.000-04:00",
      );
      expect(parseISO("2023-03-12T03:00", { in: ny }).toISOString()).toBe(
        "2023-03-12T03:00:00.000-04:00",
      );
      expect(parseISO("2023-03-12T03:30", { in: ny }).toISOString()).toBe(
        "2023-03-12T03:30:00.000-04:00",
      );
      expect(parseISO("2023-03-13T03:30", { in: ny }).toISOString()).toBe(
        "2023-03-13T03:30:00.000-04:00",
      );
    });
  });
});
