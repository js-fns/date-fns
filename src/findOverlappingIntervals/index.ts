import toDate from '../toDate/index'
import areIntervalsOverlapping from '../areIntervalsOverlapping/index'
import isBefore from '../isBefore/index'
import isAfter from '../isAfter/index'
import type { Interval } from '../types'

/**
 * @name findOverlappingIntervals
 * @category Interval Helpers
 * @summary Return an array containing all the common intervals from the given intervals list.
 *
 * @description
 * Return an array containing all the common intervals from the given intervals list.
 * For three or more intervals including each other will return the most common interval.
 *
 * @param intervals - list of intervals from which to extract the common ones.
 * @returns list of common intervals.
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For two overlapping time intervals
 * findOverlappingIntervals([
 *   { start: new Date(2023, 1, 19, 10), end: new Date(2023, 1, 19, 18) },
 *   { start: new Date(2023, 1, 19, 16), end: new Date(2023, 1, 19, 20) }
 * ])
 * //=> [{ start: new Date(2023, 1, 19, 16), end: new Date(2023, 1, 19, 18) }]
 *
 * @example
 * // For three overlapping time intervals
 * findOverlappingIntervals([
 *   { start: new Date(2023, 1, 19, 10), end: new Date(2023, 1, 19, 14) },
 *   { start: new Date(2023, 1, 19, 12), end: new Date(2023, 1, 19, 18) },
 *   { start: new Date(2023, 1, 19, 16), end: new Date(2023, 1, 19, 20) }
 * ])
 * //=> [
 * //     { start: new Date(2023, 1, 19, 12), end: new Date(2023, 1, 19, 14) },
 * //     { start: new Date(2023, 1, 19, 16), end: new Date(2023, 1, 19, 18) }
 * //   ]
 *
 * findOverlappingIntervals([
 *   { start: new Date(2023, 1, 19, 10), end: new Date(2023, 1, 19, 20) },
 *   { start: new Date(2023, 1, 19, 12), end: new Date(2023, 1, 19, 18) },
 *   { start: new Date(2023, 1, 19, 14), end: new Date(2023, 1, 19, 16) }
 * ])
 * //=> [{ start: new Date(2023, 1, 19, 14), end: new Date(2023, 1, 19, 16) }]
 *
 * @example
 * // For two overlapping time intervals and one non overlapping
 * findOverlappingIntervals([
 *   { start: new Date(2023, 1, 19, 10), end: new Date(2023, 1, 19, 14) },
 *   { start: new Date(2023, 1, 19, 12), end: new Date(2023, 1, 19, 16) },
 *   { start: new Date(2023, 1, 19, 20), end: new Date(2023, 1, 19, 22) }
 * ])
 * //=>[{ start: new Date(2023, 1, 19, 12), end: new Date(2023, 1, 19, 14) }]
 *
 * @example
 * // For non overlapping time intervals
 * findOverlappingIntervals([
 *   { start: new Date(2023, 1, 19, 10), end: new Date(2023, 1, 19, 12) },
 *   { start: new Date(2023, 1, 19, 12), end: new Date(2023, 1, 19, 14) },
 *   { start: new Date(2023, 1, 19, 14), end: new Date(2023, 1, 19, 16) }
 * ])
 * //=>[]
 */
const findOverlappingIntervals = (intervals: Interval[]): Interval[] => {
  if (intervals.length < 2) {
    return []
  }

  // function to sort intervals ascending by 'start' property
  const sortIntervals = (leftInterval: Interval, rightInterval: Interval) => {
    let leftStartTime = toDate(leftInterval.start).getTime()
    let rightStartTime = toDate(rightInterval.start).getTime()
    const result = leftStartTime - rightStartTime
    return result
  }

  const result: Interval[] = []

  const findInterval = (
    actualInterval: Interval,
    remainingIntervals: Interval[]
  ) => {
    // stop recursive function when there are no intervals to compare
    if (remainingIntervals.length === 0) {
      return
    }

    for (let i = 0; i < remainingIntervals.length; i++) {
      const interval = remainingIntervals[i]

      // check if the given interval overlap with the next one and extract the common times from each other
      if (areIntervalsOverlapping(actualInterval, interval)) {
        if (isBefore(actualInterval.start, interval.start)) {
          actualInterval.start = interval.start
        }
        if (isAfter(actualInterval.end, interval.end)) {
          actualInterval.end = interval.end
        }

        // add common interval if is not included in another one
        const exists = result.some(
          (res) =>
            res.start >= actualInterval.start && res.end <= actualInterval.end
        )
        if (!exists) {
          result.push(actualInterval)
        }

        // check remaining intervals
        findInterval(actualInterval, remainingIntervals.slice(i + 1))
      }

      // check next intervals
      findInterval(interval, remainingIntervals.slice(i + 1))
    }
  }

  // sort given intervals by 'start' property
  intervals.sort(sortIntervals)
  findInterval(intervals[0], intervals.slice(1))

  // sort extracted common intervals by 'start' property and return
  result.sort(sortIntervals)
  return result
}

export default findOverlappingIntervals
