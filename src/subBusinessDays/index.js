import toInteger from '../_lib/toInteger/index'
import addBusinessDays from '../addBusinessDays/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name subBusinessDays
 * @category Day Helpers
 * @summary Substract the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Substract the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param date - the date to be changed
 * @param amount - the amount of business days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the business days subtracted
 *
 * @example
 * // Substract 10 business days from 1 September 2014:
 * var result = subBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Aug 18 2014 00:00:00 (skipped weekend days)
 */
export default function subBusinessDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments)

  var amount = toInteger(dirtyAmount)
  return addBusinessDays(dirtyDate, -amount)
}
