import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name lastDayOfMillenium
 * @category Millenium Helpers
 * @summary Return the last day of a millenium for the given date.
 *
 * @description
 * Return the last day of a millenium for the given date.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a millenium
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a millenium for 21 December 2012 21:12:00:
 * const result = lastDayOfMillenium(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Dec 31 2999 00:00:00
 */
export default function lastDayOfMillenium(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const millenium = 999 + Math.floor(year / 1000) * 1000
  date.setFullYear(millenium + 1, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date
}
