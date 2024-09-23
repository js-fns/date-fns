import { toDate } from "../toDate/index.js";
import type { Interval } from "../types.js";

/**
 * @name isSameInterval
 * @category Interval Helpers
 * @summary Are the given intervals equal?
 *
 * @description
 * Are the given intervals equal?
 *
 * @param intervalLeft - The first interval to compare
 * @param intervalRight - The second interval to compare
 *
 * @returns The intervals are equal
 *
 * @example
 * isSameInterval(
 *   { start: new Date(2024, 0, 10), end: new Date(2024, 0, 20) },
 *   { start: new Date(2024, 0, 10), end: new Date(2024, 0, 20) }
 * )
 * //=> true
 *
 * @example
 * isSameInterval(
 *   { start: new Date(2024, 0, 10), end: new Date(2024, 0, 20) },
 *   { start: new Date(2024, 0, 11), end: new Date(2024, 0, 20) }
 * )
 * //=> false
 *
 * @example
 *   { start: new Date(2024, 0, 11), end: new Date(2024, 0, 20) },
 *   { start: new Date(2024, 0, 10), end: new Date(2024, 0, 20) }
 * )
 * //=> false
 */
export function isSameInterval(
  intervalLeft: Interval,
  intervalRight: Interval,
): boolean {
  return (
    +toDate(intervalLeft.start) === +toDate(intervalRight.start) &&
    +toDate(intervalLeft.end) === +toDate(intervalRight.end)
  );
}
