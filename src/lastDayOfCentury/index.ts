import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name lastDayOfCentury
 * @category Century Helpers
 * @summary Return the last day of a century for the given date.
 *
 * @description
 * Return the last day of a century for the given date.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a century
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a century for 21 December 2012 21:12:00:
 * const result = lastDayOfCentury(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Dec 31 2099 00:00:00
 */
export default function lastDayOfCentury(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const century = 99 + Math.floor(year / 100) * 100
  date.setFullYear(century + 1, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date
}
