import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name startOfMillenium
 * @category Millenium Helpers
 * @summary Return the start of a millenium for the given date.
 *
 * @description
 * Return the start of a millenium for the given date.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a millenium
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a millenium for 21 October 2015 00:00:00:
 * const result = startOfMillenium(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2000 00:00:00
 */
export default function startOfMillenium(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const millenium = Math.floor(year / 1000) * 1000
  date.setFullYear(millenium, 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}
