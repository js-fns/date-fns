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
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @param {Object} [options] - an object with options.
 * @param {Number[]} [options.businessDays=[1, 2, 3, 4, 5]] - the business days. default is Monday to Friday.
 * @returns {Date} the new date with the business days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Substract 10 business days from 1 September 2014:
 * const result = subBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Aug 18 2014 00:00:00 (skipped weekend days)
 */
export default function subBusinessDays(
  dirtyDate: Date | number,
  dirtyAmount: number,
  dirtyOptions?: {
    businessDays?: number[]
  }
) {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  const options = dirtyOptions || {}
  const businessDays =
    options.businessDays == null
      ? [1, 2, 3, 4, 5]
      : options.businessDays.filter((number) => number < 7).map(toInteger)
  return addBusinessDays(dirtyDate, -amount, { businessDays })
}
