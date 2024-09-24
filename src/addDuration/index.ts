import { Duration } from '../types'

type DurationUnit = keyof Duration
const durationUnits: DurationUnit[] = [
  'years',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds',
]

/**
 * @name addDuration
 * @category Duration Helpers
 * @summary Add the specified duration to another duration.
 *
 * @description
 * Add the specified duration to the given duration object.
 *
 * @param duration1 - the date to be changed
 * @param duration2 - the duration to be added in duration object.
 * @returns - the new duration with the duration added
 *
 * @example
 * // Add { years: 2, months: 2, weeks: 3, days: 2} to {years: 1, months: 2, hours: 3}:
 * const result = addDuration({years: 1, months: 2, hours: 3}, { years: 2, months: 2, weeks: 3, days: 2})
 * //=> {years: 3, months: 4, weeks: 3, days: 2, hours: 3}
 */
export default function addDuration(
  duration1: Duration,
  duration2: Duration
): Duration {
  if (!duration1 || !duration2) {
    return duration1 || duration2
  }

  const result = durationUnits.reduce((acc, unit) => {
    const value1 = duration1[unit]
    const value2 = duration2[unit]

    if (
      (value1 !== undefined && isNaN(value1)) ||
      (value2 !== undefined && isNaN(value2))
    ) {
      throw new TypeError(
        `${unit} should not be ${value1}, it should be a number`
      )
    }

    if (value1 || value2)
      return {
        ...acc,
        [unit]: (value1 || 0) + (value2 || 0),
      }

    return acc
  }, {} as Duration)
  return result
}
