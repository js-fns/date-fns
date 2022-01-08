/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param date - the given date
 * @returns the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
export default function getDate(date: Date | number): number {
  const dateTransfermed = new Date(date)
  const dayOfMonth = dateTransfermed.getDate()
  return dayOfMonth
}
