import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getMillenium
 * @category Millenium Helpers
 * @summary Get the millenium of the given date.
 *
 * @description
 * Get the millenium of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year of millenium
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which millenium belongs 27 November 1942?
 * const result = getMillenium(new Date(1942, 10, 27))
 * //=> 1000
 */
export default function getMillenium(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const millenium = Math.floor(year / 1000) * 1000
  return millenium
}
