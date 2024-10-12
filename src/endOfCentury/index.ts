import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name endOfCentury
 * @category Century Helpers
 * @summary Return the end of a century for the given date.
 *
 * @description
 * Return the end of a century for the given date.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a century
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a century for 12 May 1984 00:00:00:
 * const result = endOfCentury(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1999 23:59:59.999
 */
export default function endOfCentury(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const century = 99 + Math.floor(year / 100) * 100
  date.setFullYear(century, 11, 31)
  date.setHours(23, 59, 59, 999)
  return date
}
