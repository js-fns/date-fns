import differenceInCalendarWeeks from '../differenceInCalendarWeeks/index'
import lastDayOfMonth from '../lastDayOfMonth/index'
import startOfMonth from '../startOfMonth/index'
import type { LocaleOptions, WeekStartOptions } from '../types'

/**
 * The {@link getWeeksInMonth} function options.
 */
export interface GetWeeksInMonthOptions
  extends LocaleOptions,
    WeekStartOptions {}

/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
export default function getWeeksInMonth<DateType extends Date>(
  date: DateType | number,
  options?: GetWeeksInMonthOptions
): number {
  return (
    differenceInCalendarWeeks(
      lastDayOfMonth(date),
      startOfMonth(date),
      options
    ) + 1
  )
}
