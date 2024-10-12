import toDate from '../toDate'
import { addMonths, isSameMonth } from '..'

/**
 * @name isNextMonth
 * @category Day Helpers
 * @summary Is the given date next month?
 * @pure false
 *
 * @description
 * Is the given date next month?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is next month
 *
 * @example
 * // If today is 8 May 2023, is 7 June 14:00:00 next month?
 * const result = isNextMonth(new Date(2023, 5, 7, 14, 0))
 * //=> true
 */
export default function isNextMonth<DateType extends Date>(
  date: DateType | number
): boolean {
  const _date = toDate(date)
  const newMonth = addMonths(Date.now(), 1)

  return isSameMonth(_date, newMonth)
}
