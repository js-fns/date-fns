import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { constructFrom } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import type { ContextOptions, DateArg } from "../types.js";

describe("constructFrom", () => {
  it("should create a new Date instance using the constructor from the reference date", () => {
    const referenceDate = new Date("2023-10-25T12:00:00");
    const value = new Date("2023-10-26T12:00:00");

    const result = constructFrom(referenceDate, value);

    expect(result instanceof Date).toBe(true);
    expect(result).toEqual(value);
    expect(result.constructor).toBe(referenceDate.constructor);
  });

  it("should create a new Date instance using a number as the reference date", () => {
    const referenceDate = 1635158400000; // October 25, 2023
    const value = new Date("2023-10-26T12:00:00");

    const result = constructFrom(referenceDate, value);

    expect(result instanceof Date).toBe(true);
    expect(result).toEqual(value);
  });

  it("should create a new custom Date instance using the constructor from the reference date", () => {
    class CustomDate extends Date {}
    const referenceDate = new CustomDate("2023-10-25T12:00:00");
    const value = new CustomDate("2023-10-26T12:00:00");

    const result = constructFrom(referenceDate, value);

    expect(result instanceof CustomDate).toBe(true);
    expect(result).toEqual(value);
    expect(result.constructor).toBe(referenceDate.constructor);
  });

  it("should create a new Date instance using numbers as both referenceDate and value", () => {
    const referenceDate = 1635158400000; // October 25, 2023
    const value = 1635244800000; // October 26, 2023

    const result = constructFrom(referenceDate, value);

    expect(result instanceof Date).toBe(true);
    expect(result.getTime()).toEqual(value);
  });

  it("allows to pass undefined", () => {
    const value = 1635244800000; // October 26, 2023
    const result = constructFrom(undefined, value);
    expect(result instanceof Date).toBe(true);
    expect(result.getTime()).toEqual(value);
  });

  it("allows to pass a context function as the reference date", () => {
    const value = 1635244800000; // October 26, 2023
    const result = constructFrom(tz("Asia/Singapore"), value);
    expect(result instanceof TZDate).toBe(true);
    expect(result.getTime()).toEqual(value);
  });

  it("resolves the date type by default", () => {
    const result = constructFrom(Date.now(), Date.now());
    expect(result instanceof Date).toBe(true);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = constructFrom(new UTCDate(), Date.now());
    expect(result instanceof UTCDate).toBe(true);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  it("resolves the context type if it is passed as the argument", () => {
    const result = constructFrom(tz("Asia/Singapore"), Date.now());
    expect(result instanceof TZDate).toBe(true);
    assertType<assertType.Equal<TZDate, typeof result>>(true);
  });

  it("doesn't enforce argument and context to be of the same type", () => {
    function _test<DateType extends Date, ResultDate extends Date = DateType>(
      arg: DateArg<DateType>,
      options?: ContextOptions<ResultDate>,
    ) {
      constructFrom(options?.in || arg, arg);
    }
  });

  describe("edge cases", () => {
    it("does not trip over null", () => {
      const value = 1635244800000; // October 26, 2023
      // @ts-expect-error - We want to pass null here
      const result = constructFrom(null, value);
      expect(result instanceof Date).toBe(true);
      expect(result.getTime()).toEqual(value);
    });

    it("returns invalid date for invalid arguments consistently", () => {
      expect(+constructFrom(undefined, NaN)).toBe(NaN);
      expect(+constructFrom(tz("Asia/Singapore"), NaN)).toBe(NaN);
    });

    it("returns invalid date for null value instead of 1970", () => {
      // @ts-expect-error - We want to pass null here
      expect(+constructFrom(null, null)).toBe(NaN);
    });
  });
});
