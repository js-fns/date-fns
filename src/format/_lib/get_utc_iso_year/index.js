import toDate from '../../../to_date/index.js'
import startOfUTCISOWeek from '../start_of_utc_iso_week/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function getUTCISOYear (dirtyDate, options) {
  var date = toDate(dirtyDate, options)
  var year = date.getUTCFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0)
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, options)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0)
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, options)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
