import eachDayOfInterval from '../eachDayOfInterval/index'
import isSunday from '../isSunday/index'
import isWeekend from '../isWeekend/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @param {Interval} interval - the given interval. See [Interval]{@link docs/types/Interval}
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * var result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */
export default function eachWeekendOfInterval(interval) {
  requiredArgs(1, arguments)

  // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
  var dateInterval = eachDayOfInterval(interval)
  var weekends = []
  var index = 0
  while (index < dateInterval.length) {
    var date = dateInterval[index++]
    if (isWeekend(date)) {
      weekends.push(date)
      if (isSunday(date)) index = index + 5
    }
  }
  return weekends
}
