import toDate from '../toDate'
import { subHours, isSameHour } from '..'

/**
 * @name isLastHour
 * @category Day Helpers
 * @summary Is the given date last hour?
 * @pure false
 *
 * @description
 * Is the given date last hour?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is last hour
 *
 * @example
 * // If today is 8 May 2023 08:00:00, is 8 May 07:00:00 last hour?
 * const result = isLastHour(new Date(2023, 4, 8, 7, 0))
 * //=> true
 */
export default function isLastHour<DateType extends Date>(
  date: DateType | number
): boolean {
  const _date = toDate(date)
  const lastHour = subHours(Date.now(), 1)

  return isSameHour(_date, lastHour)
}
