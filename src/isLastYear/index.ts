import toDate from '../toDate'

/**
 * @name isLastYear
 * @category Day Helpers
 * @summary Is the given date last year?
 * @pure false
 *
 * @description
 * Is the given date last year?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is last year
 *
 * @example
 * // If today is 8 May 2023, is 7 April 2022 14:00:00 last year?
 * const result = isLastYear(new Date(2022, 3, 7, 14, 0))
 * //=> true
 */
export default function isLastYear<DateType extends Date>(
  date: DateType | number
): boolean {
  const _date = toDate(date)
  const today = toDate(Date.now())

  return today.getFullYear() - _date.getFullYear() === 1
}
