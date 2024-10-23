import { describe, expect, it } from "vitest";
import { parse } from "../../index.js";
import { formatISO } from "../../formatISO/index.js";
import { is } from "./index.js";

describe("parse > icelandic language", () => {
  it("properly parses dates", () => {
    const format = "dd MMM yyyy";
    expect(
      parse("06 feb 2024", format, new Date(), { locale: is }).toISOString(),
    ).toBe("2024-02-05T18:30:00.000Z");
    expect(
      formatISO(
        parse("06 ágú 2024", format, new Date(), {
          locale: is,
        }).toISOString(),
      ),
    ).toBe("2024-08-06T00:00:00+05:30");
    expect(
      formatISO(
        parse("23 okt 2024", format, new Date(), {
          locale: is,
        }).toISOString(),
      ),
    ).toBe("2024-10-23T00:00:00+05:30");
  });
});
