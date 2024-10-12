import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getCentury
 * @category Century Helpers
 * @summary Get the century of the given date.
 *
 * @description
 * Get the century of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year of century
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which century belongs 27 November 1942?
 * const result = getCentury(new Date(1942, 10, 27))
 * //=> 1900
 */
export default function getCentury(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const century = Math.floor(year / 100) * 100
  return century
}
