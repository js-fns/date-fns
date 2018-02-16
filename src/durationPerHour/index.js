import isBefore from '../isBefore/index.js'
import toDate from '../toDate/index.js'

/**
 * @name durationPerHour
 * @category Hour Helpers
 * @summary Allocate the duration of a time range to all hours entered into
 * @description Allocate the duration of a time range to all hours entered into
 *
 * @param {Date | String | Number} start - the start of the time range
 * @param {Date | String | Number} end - the end of the time range
 * @returns {Object} - an object with the timestamps of the starts of each hour (UTC) as its keys and the respective durations in milliseconds as its values
 * @throws {TypeError} 2 arguments required, end cannot be earlier than start
 *
 * @example
 * // How much of the time between 07:33h and 10:43h falls into each full hour?
 * const start = new Date('2017-11-15T07:33:00.000+0000')
 * const end = new Date('2017-11-15T10:43:00.000+0000')
 * durationPerHour(start, end)
 * // => {
 * //   1510729200000: 1620000,
 * //   1510732800000: 3600000,
 * //   1510736400000: 3600000,
 * //   1510740000000: 2580000
 * // }
 */
export default function (dirtyStart, dirtyEnd) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }
  if (isBefore(dirtyEnd, dirtyStart)) {
    throw new TypeError('the start date cannot be after the end date')
  }

  const startOfHour = (timestamp) => parseInt(timestamp / hour, 10) * hour

  const start = toDate(dirtyStart).getTime()
  const end = toDate(dirtyEnd).getTime()
  const hour = 60 * 60 * 1000
  const startOfFirstHour = startOfHour(start)
  const startOfLastHour = startOfHour(end)

  if (startOfFirstHour === startOfLastHour) {
    return { [startOfFirstHour]: end - start }
  }

  const durationPerHour = {
    [startOfFirstHour]: startOfFirstHour + hour - start,
    [startOfLastHour]: end - startOfLastHour
  }

  const amountOfCompleteHours = (startOfLastHour - startOfFirstHour) / hour - 1
  const keys = [...Array(amountOfCompleteHours)].map((_, key) => startOfFirstHour + (key + 1) * hour)

  return keys.reduce((acc, key) => Object.assign(acc, { [key]: hour }), durationPerHour)
}
