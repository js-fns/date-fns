import getISOWeek from '../getISOWeek/index'
import toDate from '../toDate/index'
import toInteger from '../_lib/toInteger/index'

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
export default function setISOWeek<DateType extends Date>(
  dirtyDate: DateType | number,
  dirtyISOWeek: number
): DateType {
  const date = toDate(dirtyDate)
  const isoWeek = toInteger(dirtyISOWeek)
  const diff = getISOWeek(date) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  return date
}
