import { Duration } from '../types'
import add from '../add'
import sub from '../sub'
import differenceInWeeks from '../differenceInWeeks'
import differenceInDays from '../differenceInDays'
import differenceInHours from '../differenceInHours'
import differenceInMinutes from '../differenceInMinutes'
import differenceInSeconds from '../differenceInSeconds'

/**
 * @name cumulateDurations
 * @category Common Helpers
 * @summary Cumulate a list of durations into a single Duration object
 *
 * @description
 * Cumulate a list of durations into a single Duration object. Months and
 * Years are omitted from parameter and return value since the number of Days
 * and Weeks they respectively contain are relative to their associated Date.
 *
 * @param durations - the list of durations
 * @returns A duration object
 *
 * @example
 * const result = cumulateDurations([{seconds: 30}, {seconds: 31}])
 * // result => {seconds: 1, minutes: 1, ..rest}
 *
 * const result = cumulateDurations([{minutes: 30}, {minutes: 31}])
 * // result => {minutes: 1, hours: 1, ..rest}
 *
 * const result = cumulateDurations([{hours: 12}, {hours: 13}])
 * // result => {hours: 1, days: 1, ..rest}
 *
 * const result = cumulateDurations([{days: 3}, {days: 4}])
 * // result => {days: 1, weeks: 1, ..rest}
 *
 * const result = cumulateDurations([{weeks: 1}, {weeks: 1}])
 * // result => {weeks: 2, ..rest}
 */
export default function cumulateDurations(
  durations: Omit<Duration, 'years' | 'months'>[]
): Duration {
  const baseDate = new Date(0)

  const dateWithAllDurations = durations.reduce(
    (accumulatedDate, duration) => add(accumulatedDate, duration),
    baseDate
  )

  return getStaticDurationValues(new Date(0), dateWithAllDurations)
}

const getStaticDurationValues = (
  baseDate: Date,
  cumulativeDurationDate: Date
) => {
  const newDuration: Duration = {
    weeks: differenceInWeeks(cumulativeDurationDate, baseDate),
  }

  const dateWithoutWeeks = sub(cumulativeDurationDate, {
    weeks: newDuration.weeks,
  })
  newDuration.days = differenceInDays(dateWithoutWeeks, baseDate)

  const dateWithoutDays = sub(dateWithoutWeeks, { days: newDuration.days })
  newDuration.hours = differenceInHours(dateWithoutDays, baseDate)

  const dateWithoutHours = sub(dateWithoutDays, { hours: newDuration.hours })
  newDuration.minutes = differenceInMinutes(dateWithoutHours, baseDate)

  const dateWithoutMinutes = sub(dateWithoutHours, {
    minutes: newDuration.minutes,
  })
  newDuration.seconds = differenceInSeconds(dateWithoutMinutes, baseDate)

  return newDuration
}
