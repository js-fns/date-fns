import { addDays, isEqual, isWeekend, startOfDay, toDate } from '..'

/**
 * @name nextBusinessDay
 * @category Day Helpers
 * @summary When is the next business day?
 *
 * @description Returns the next business day (Mon - Fri)
 *
 * @param {Date|Number} date - The initial date
 * @param {Object} options - The options object
 * @param {Number} [options.startFromDay=0] - The day that it starts counting from with 0 as a default value.
 * To start counting from the next date set this to 1.
 *
 * @param {[Date]} options.excludeDates - An array of dates to exclude e.g. holidays.
 * @returns {Date} the next business day
 * @throws {TypeError} startFrom can't be a negative number
 *
 * @example
 * // When is the next business day after July, 4 2021
 * const result = nextBusinessDay(new Date(2021, 6, 4))
 * //=> Mon Jul 05 2021 00:00:00
 *
 * // When is the next business day after September, 6 2021 with an excluded day?
 * const holidays = [new Date(2021, 8, 7)] // September, 7 - Brazil Independence Day
 * const result = nextBusinessDay(new Date(2021, 8, 6), 1, holidays)
 * //=> Wed Sep 8 2021 00:00:00
 */

interface Options {
  startFromDay?: number;
  excludeDates?: Array<Date | number>;
}

export default function nextBusinessDay(
  dirtyDate: Date | number,
  options: Options = {},
): Date {
  const date = startOfDay(toDate(dirtyDate))

  const { startFromDay = 0, excludeDates = [] } = options;

  if (startFromDay < 0)
    throw new TypeError("startFrom can't be a negative number")

  const initialDate = addDays(date, startFromDay)

  const isOnTheExcludeDatesList = () => {
    if (excludeDates.length === 0) return false

    return excludeDates.some((excludeDate) =>
      isEqual(initialDate, startOfDay(excludeDate))
    )
  }

  if (!isWeekend(initialDate) && !isOnTheExcludeDatesList()) return initialDate

  return nextBusinessDay(addDays(initialDate, 1), { startFromDay: 0, excludeDates })
}
