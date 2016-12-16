var parse = require('../parse/index.js')

/**
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} [options] - the object with options. See [options]{@link docs/types/options}
 * @returns {Boolean} the date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth (dirtyDate, options) {
  return parse(dirtyDate, options).getDate() === 1
}

module.exports = isFirstDayOfMonth
