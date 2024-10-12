import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name startOfCentury
 * @category Century Helpers
 * @summary Return the start of a century for the given date.
 *
 * @description
 * Return the start of a century for the given date.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a century
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a century for 21 October 2015 00:00:00:
 * const result = startOfCentury(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2000 00:00:00
 */
export default function startOfCentury(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const century = Math.floor(year / 100) * 100
  date.setFullYear(century, 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}
