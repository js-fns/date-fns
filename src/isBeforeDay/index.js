import toDate from '../toDate/index.js'
import startOfDay from '../startOfDay/index.js'
import requiredArgs from '../_lib/requiredArgs/index.js'

/**
 * @name isBeforeDay
 * @category Common Helpers
 * @summary Is the first date before the second one by day?
 *
 * @description
 * Is the first date before the second one by day?
 *
 * @param {Date|Number} date - the date that should be before the other one by day to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date by day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 July 1989 by day?
 * var result = isBeforeDay(new Date(1989, 6, 10), new Date(1989, 6, 11))
 * //=> true
 *
 * // Is 11 July 1989 09:00 before 11 July 1989 10:00 by day?
 * var result = isBeforeDay(new Date(1989, 6, 11, 9), new Date(1989, 6, 11, 10))
 * //=> false
 */
export default function isBeforeDay(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var dateToCompare = toDate(dirtyDateToCompare)
  return startOfDay(date).getTime() < startOfDay(dateToCompare).getTime()
}
