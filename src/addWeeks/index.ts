import addDays from '../addDays/index'
import toInteger from '../_lib/toInteger/index'

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
export default function addWeeks<DateType extends Date>(
  dirtyDate: DateType | number,
  dirtyAmount: number
): DateType {
  const amount = toInteger(dirtyAmount)
  const days = amount * 7
  return addDays(dirtyDate, days)
}
