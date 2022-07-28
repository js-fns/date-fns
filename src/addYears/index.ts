import addMonths from '../addMonths/index'
import toInteger from '../_lib/toInteger/index'

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
export default function addYears<DateType extends Date>(
  dirtyDate: DateType | number,
  dirtyAmount: number
): DateType {
  const amount = toInteger(dirtyAmount)
  return addMonths(dirtyDate, amount * 12)
}
