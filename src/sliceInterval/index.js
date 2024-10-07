import requiredArgs from '../_lib/requiredArgs/index.js'
import max from '../max/index.js'
import min from '../min/index.js'

/**
 * @name sliceInterval
 * @category Second Helpers
 * @summary  Returns an Interval objects which represents intervals - remove.
 *
 * @description
 *  Returns an array of Interval objects which represents intervals - remove.
 *
 * @param {[Interval, Interval]} intervals
 * @param {Interval} interval
 * @returns {Array} an array of Interval objects which represents intervals - remove
 * @throws {TypeError} 2 arguments required
 *
 */
export default function sliceInterval(intervals, interval) {
  requiredArgs(2, arguments)

  return intervals.map(item => {
    const minStart = min([item.start, interval.start])
    const maxStart = max([item.start, interval.start])

    const minEnd = min([item.end, interval.end])
    const maxEnd = max([item.end, interval.end])

    return [
      {
        start: minStart,
        end: maxStart
      },
      {
        start: minEnd,
        end: maxEnd
      }
    ]
  })
}
