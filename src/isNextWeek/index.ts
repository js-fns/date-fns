import toDate from '../toDate'
import { addWeeks, isSameWeek } from '..'

/**
 * @name isNextWeek
 * @category Day Helpers
 * @summary Is the given date next week?
 * @pure false
 *
 * @description
 * Is the given date next week?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is next week
 *
 * @example
 * // If today is 8 May 2023, is 15 May 14:00:00 last week?
 * const result = isNextWeek(new Date(2023, 4, 15, 14, 0))
 * //=> true
 */
export default function isNextWeek<DateType extends Date>(
  date: DateType | number
): boolean {
  const _date = toDate(date)
  const nextWeek = addWeeks(Date.now(), 1)

  return isSameWeek(_date, nextWeek)
}
