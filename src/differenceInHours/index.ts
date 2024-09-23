import { getRoundingMethod } from "../_lib/getRoundingMethod/index.js";
import { normalizeDates } from "../_lib/normalizeDates/index.js";
import { millisecondsInHour } from "../constants/index.js";
import type { ContextOptions, DateArg, RoundingOptions } from "../types.js";

/**
 * The {@link differenceInHours} function options.
 */
export interface DifferenceInHoursOptions
  extends RoundingOptions,
    ContextOptions<Date> {}

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 *
 * // Different rounding options can result in distinct outputs based on fractional hours in the result.
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50),
 *   { roundingMethod: 'ceil' }
 * )
 * //=> 13
 *
 * // ceil — if there is a fractional piece of an hour in the result, the next highest hour value is used
 * // floor — if there is a fractional piece of an hour in the result, the next lowest hour value is used
 * // round — if there is a fractional piece of an hour in the result, the closest hour value is used
 * // trunc — ignores the fractional element of the result and simply uses the hour value
 */
export function differenceInHours(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInHoursOptions,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const diff = (+laterDate_ - +earlierDate_) / millisecondsInHour;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
