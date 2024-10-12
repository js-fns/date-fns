import isLeapYear from '../isLeapYear/index'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'
import toInteger from '../_lib/toInteger/index'

/**
 * @name getAnniversaryForYear
 * @category Common Helpers
 * @summary Returns the date of an anniversary for a given year
 *
 * @description
 * Returns the date of an anniversary for a given year. Can handle different resolve behaviors for leap year anniversaries.
 *
 * @param {Date|Number} anniversaryDate - the anniversary date
 * @param {Number} year - the target year
 * @param {'feb28' | 'mar1' | 'invalid'} [resolveLeapYearAnniversaryAs='mar1'] - the resolve behavior of a leap year anniversary for non-leap year
 * @returns {Date} - the anniversary date for the given year
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // For an anniversary of July 2nd 2014, get the anniversary date for 2021:
 * const result = getAnniversaryForYear(new Date(2014, 6, 2), 2021)
 * //=> Fri Jul 02 2021 00:00:00
 *
 * @example
 * // For a leap year anniversary of February 29th 2020, get the anniversary date for 2024 (a leap year as well):
 * const result = getAnniversaryForYear(new Date(2020, 1, 29), 2024)
 * //=> Thu Feb 29 2024 00:00:00
 *
 * @example
 * // For a leap year anniversary of February 29th 2020, get the anniversary date for a non-leap year using different resolve behaviors:
 *
 * // resolve to March 1st on non-leap years (default)
 * const result = getAnniversaryForYear(new Date(2020, 1, 29), 2023, 'mar1')
 * //=> Wed Mar 01 2023 00:00:00
 *
 * // resolve to February 28th on non-leap years
 * const result = getAnniversaryForYear(new Date(2020, 1, 29), 2023, 'feb28')
 * //=> Tue Feb 28 2023 00:00:00
 *
 * // treat as invalid date, no anniversary on non-leap years
 * const result = getAnniversaryForYear(new Date(2020, 1, 29), 2023, 'invalid')
 * //=> Invalid Date
 */
export default function getAnniversaryForYear(
  dirtyAnniversaryDate: Date | number,
  dirtyYear: number,
  resolveLeapYearAnniversaryAs: 'feb28' | 'mar1' | 'invalid' = 'mar1'
): Date {
  requiredArgs(2, arguments)

  const anniversaryDate = toDate(dirtyAnniversaryDate)

  if (isNaN(anniversaryDate.getTime())) return new Date(NaN)

  const year = toInteger(dirtyYear)

  const resultDate = toDate(dirtyAnniversaryDate)
  resultDate.setFullYear(year)

  // leap year anniversary date for a non-leap year
  // note: default behavior with setFullYear() lands us on March 1st
  if (
    resolveLeapYearAnniversaryAs !== 'mar1' &&
    anniversaryDate.getDate() === 29 &&
    anniversaryDate.getMonth() === 1 &&
    !isLeapYear(resultDate)
  ) {
    if (resolveLeapYearAnniversaryAs === 'feb28') {
      resultDate.setMonth(1, 28)
    } else if (resolveLeapYearAnniversaryAs === 'invalid') {
      return new Date(NaN)
    }
  }

  return resultDate
}
