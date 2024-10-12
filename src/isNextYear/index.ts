import toDate from '../toDate'

/**
 * @name isNextYear
 * @category Day Helpers
 * @summary Is the given date next year?
 * @pure false
 *
 * @description
 * Is the given date next year?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is next year
 *
 * @example
 * // If today is 8 May 2023, is 7 April 2024 14:00:00 next year?
 * const result = isNextYear(new Date(2024, 3, 7, 14, 0))
 * //=> true
 */
export default function isNextYear<DateType extends Date>(
  date: DateType | number
): boolean {
  const _date = toDate(date)
  const today = toDate(Date.now())

  return today.getFullYear() + 1 === _date.getFullYear()
}
