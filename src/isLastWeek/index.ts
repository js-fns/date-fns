import toDate from '../toDate'
import { subWeeks, isSameWeek } from '..'

/**
 * @name isLastWeek
 * @category Day Helpers
 * @summary Is the given date last week?
 * @pure false
 *
 * @description
 * Is the given date last week?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is last week
 *
 * @example
 * // If today is 8 May 2023, is 1 May 14:00:00 last week?
 * const result = isLastWeek(new Date(2023, 4, 1, 14, 0))
 * //=> true
 */
export default function isLastWeek<DateType extends Date>(
  date: DateType | number
): boolean {
  const _date = toDate(date)
  const lastWeek = subWeeks(Date.now(), 1)

  return isSameWeek(_date, lastWeek)
}
