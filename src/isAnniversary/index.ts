import isLeapYear from '../isLeapYear/index'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name isAnniversary
 * @category Common Helpers
 * @summary Is the date an anniversary of the given reference date?
 *
 * @description
 * Is the date an anniversary of the given reference date? Can handle different resolve behaviors for leap year anniversaries.
 *
 * @param {Date|Number} anniversaryDate - the reference anniversary date
 * @param {Date|Number} date - the date to compare against the anniversary date
 * @param {'feb28' | 'mar1' | 'invalid'} [resolveLeapYearAnniversaryAs='mar1'] - the resolve behavior of a leap year anniversary for non-leap year
 * @returns {Boolean} - the date is an anniversary
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // For an anniversary of July 2nd 2014, the July 2nd 2021 date is an anniversary:
 * const result = isAnniversary(new Date(2014, 6, 2), new Date(2021, 6, 2))
 * //=> true
 *
 * @example
 * // For a leap year anniversary of February 29th 2020, the February 29th 2024 date (a leap year as well) is an anniversary:
 * const result = isAnniversary(new Date(2020, 1, 29), new Date(2024, 1, 29))
 * //=> true
 *
 * @example
 * // For a leap year anniversary of February 29th 2020, check if a date is an anniversary for a non-leap year using different resolve behaviors:
 *
 * // resolve to March 1st on non-leap years (default)
 * const result = isAnniversary(new Date(2020, 1, 29), new Date(2023, 2, 1), 'mar1')
 * //=> true
 *
 * // resolve to February 28th on non-leap years
 * const result = isAnniversary(new Date(2020, 1, 29), new Date(2023, 1, 28), 'feb28') // resolve to February 28th
 * //=> true
 *
 * // treat as invalid date, no anniversary on non-leap years
 * const result = isAnniversary(new Date(2020, 1, 29), new Date(2023, 1, 28), 'invalid')
 * //=> false
 * const result = isAnniversary(new Date(2020, 1, 29), new Date(2023, 2, 1), 'invalid')
 * //=> false
 */
export default function isAnniversary(
  dirtyAnniversaryDate: Date | number,
  dirtyDate: Date | number,
  resolveLeapYearAnniversaryAs: 'feb28' | 'mar1' | 'invalid' = 'mar1'
): boolean {
  requiredArgs(2, arguments)

  const anniversaryDate = toDate(dirtyAnniversaryDate)
  if (isNaN(anniversaryDate.getTime())) return false

  const date = toDate(dirtyDate)
  if (isNaN(date.getTime())) return false

  // leap year anniversary date for a non-leap year
  if (
    anniversaryDate.getDate() === 29 &&
    anniversaryDate.getMonth() === 1 &&
    !isLeapYear(date)
  ) {
    if (resolveLeapYearAnniversaryAs === 'feb28') {
      return date.getDate() === 28 && date.getMonth() === 1
    } else if (resolveLeapYearAnniversaryAs === 'mar1') {
      return date.getDate() === 1 && date.getMonth() === 2
    } else if (resolveLeapYearAnniversaryAs === 'invalid') {
      return false
    }
  }

  return (
    date.getDate() === anniversaryDate.getDate() &&
    date.getMonth() === anniversaryDate.getMonth()
  )
}
