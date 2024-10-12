import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getFirstBusinessDateOfMonth
 * @category Day Helpers
 * @summary Get the first business date of the month
 *
 * @description
 * Get the first business date of the month
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the date of first business day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // What is the first business date of the month?
 * const result = getFirstBusinessDateOfMonth(new Date(2022, 10, 1))
 * //=> 3
 */

// export default function getFirstBusinessDayOfMonth(year: number, month: number): number {
export default function getFirstBusinessDateOfMonth(
  dirtyDate: Date | number
): number {
  requiredArgs(1, arguments)

  let result: Date
  const date = toDate(dirtyDate)
  let day = 1
  const month = date.getMonth()
  const year = date.getFullYear()

  do {
    result = new Date(year, month, day)
    day++
  } while (result.getDay() === 0 || result.getDay() === 6)

  return result.getDate()
}
