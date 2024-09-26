import type { Duration } from "../types.js";

const ISO_DURATION_REGEX = /P(?!$)(?:([\d]+\.?[\d]*|\.[\d]+)Y)?(?:([\d]+\.?[\d]*|\.[\d]+)M)?(?:([\d]+\.?[\d]*|\.[\d]+)W)?(?:([\d]+\.?[\d]*|\.[\d]+)D)?(?:T(?=\d)(?:([\d]+\.?[\d]*|\.[\d]+)H)?(?:([\d]+\.?[\d]*|\.[\d]+)M)?(?:([\d]+\.?[\d]*|\.[\d]+)S)?)?$/;

/**
 * @name parseISODuration
 * @category Common Helpers
 * @summary Parse ISO Duration string
 *
 * @description
 * Parse the given string in ISO 8601 format and return Duration object.
 *
 * Function accepts duration format of ISO 8601.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * Specifically: https://en.wikipedia.org/wiki/ISO_8601#Durations
 *
 * If the argument is not a valid ISO Duration it will throw Invalid format error.
 *
 * @param argument - ISO Duration string
 * @returns Parsed duration object
 *
 * @throws It throws an "Invalid format" error if the string doesn't match the ISO Duration format
 *
 * @example
 * // Convert string 'P3Y6M4DT12H30M5S' to duration:
 * const result = parseISODuration('P3Y6M4DT12H30M5S')
 * //=> { years: 3, months: 6, weeks: 0, days: 4, hours: 12, minutes: 30, seconds: 5 }
 */
export function parseISODuration(argument: string): Duration {
  const parsedArgument = argument.replace(/,/g, "."); // Decimal fraction may be specified with either a comma or a full stop

  const match = parsedArgument.match(ISO_DURATION_REGEX);

  if (!match) {
    throw new RangeError("Invalid format");
  }

  const [
    ,
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds,
  ] = match;

  const entries = Object.entries({
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds,
  }) as [keyof Duration, string][];

  return entries.reduce<Duration>((prev, [key, value]) => {
    if (value !== undefined) {
      prev[key] = +value;
    }
    return prev;
  }, {});
}
