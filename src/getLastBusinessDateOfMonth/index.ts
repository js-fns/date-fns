import toDate from '../toDate/index'
import lastDayOfMonth from '../lastDayOfMonth'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getLastBusinessDateOfMonth
 * @category Day Helpers
 * @summary Get the last business date of the month
 *
 * @description
 * Get the last business date of the month
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the date of the last business day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // What is the first business date of the month?
 * const result = getLastBusinessDateOfMonth(new Date(2022, 6, 10))
 * //=> 29
 */

export default function getLastBusinessDateOfMonth(
  dirtyDate: Date | number
): number {
  requiredArgs(1, arguments)

  let result: Date
  const date = lastDayOfMonth(toDate(dirtyDate))
  const month = date.getMonth()
  const year = date.getFullYear()
  let day = lastDayOfMonth(new Date(year, month)).getDate()

  do {
    result = new Date(year, month, day)
    day--
  } while (result.getDay() === 0 || result.getDay() === 6)

  return result.getDate()
}
