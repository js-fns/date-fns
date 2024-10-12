import { toDate } from "../toDate/index.js";
import type { DateArg } from "../types.js";

/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * @param date - The given date. If the date is in milliseconds, it will be rounded to the nearest second.
 *
 * @returns The timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */
export function getUnixTime(date: DateArg<Date> & {}): number {
  return Math.round(+toDate(date) / 1000);
}
