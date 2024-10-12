import toDate from '../toDate'
import { subMonths, isSameMonth } from '..'

/**
 * @name isLastMonth
 * @category Day Helpers
 * @summary Is the given date last month?
 * @pure false
 *
 * @description
 * Is the given date last month?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is last month
 *
 * @example
 * // If today is 8 May 2023, is 7 April 14:00:00 last month?
 * const result = isLastMonth(new Date(2023, 3, 7, 14, 0))
 * //=> true
 */
export default function isLastMonth<DateType extends Date>(
  date: DateType | number
): boolean {
  const _date = toDate(date)
  const lastMonth = subMonths(Date.now(), 1)

  return isSameMonth(_date, lastMonth)
}
