import toDate from '../toDate'
import { addHours, isSameHour } from '..'

/**
 * @name isNextHour
 * @category Day Helpers
 * @summary Is the given date next hour?
 * @pure false
 *
 * @description
 * Is the given date next hour?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is next hour
 *
 * @example
 * // If today is 8 May 2023 08:00:00, is 8 May 09:00:00 next hour?
 * const result = isNextHour(new Date(2023, 4, 8, 9, 0))
 * //=> true
 */
export default function isNextHour<DateType extends Date>(
  date: DateType | number
): boolean {
  const _date = toDate(date)
  const nextHour = addHours(Date.now(), 1)

  return isSameHour(_date, nextHour)
}
