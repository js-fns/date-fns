// @flow
/* eslint-env mocha */

import assert from 'assert'
import getAnniversaryForYear from '.'

describe('getAnniversaryForYear', function () {
  it('returns the anniversary date for the given year', function () {
    const result = getAnniversaryForYear(new Date(2014, 6 /* Jul */, 2), 2021)
    const expected = new Date(2021, 6, 2)
    assert(result.getTime() === expected.getTime())
  })

  it('keeps the anniversary time', function () {
    const result = getAnniversaryForYear(
      new Date(2014, 6 /* Jul */, 2, 12, 11, 10, 9),
      2021
    )
    const expected = new Date(2021, 6, 2, 12, 11, 10, 9)
    assert(result.getTime() === expected.getTime())
  })

  it('handles leap year anniversaries correctly', function () {
    const feb29 = new Date(2020, 1, 29)
    let result, expected

    // target year is also leap year
    result = getAnniversaryForYear(feb29, 2024)
    expected = new Date(2024, 1, 29)
    assert(result.getTime() === expected.getTime())

    // target leap year is not leap year, 3 possible resolve behaviors:

    // resolve as March 1st (default)
    result = getAnniversaryForYear(feb29, 2023, 'mar1')
    expected = new Date(2023, 2, 1)
    assert(result.getTime() === expected.getTime())

    // resolve as February 28th
    result = getAnniversaryForYear(feb29, 2023, 'feb28')
    expected = new Date(2023, 1, 28)
    assert(result.getTime() === expected.getTime())

    // invalid
    result = getAnniversaryForYear(feb29, 2023, 'invalid')
    assert(isNaN(result.getTime()))
  })

  it('accepts a timestamp', function () {
    const result = getAnniversaryForYear(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      2021
    )
    const expected = new Date(2021, 6, 2)
    assert(result.getTime() === expected.getTime())
  })

  it('returns NaN if the given anniversary date is invalid', function () {
    const result = getAnniversaryForYear(new Date(NaN), 2021)
    assert(isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    // @ts-expect-error
    assert.throws(getAnniversaryForYear.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(getAnniversaryForYear.bind(null, 1), TypeError)
  })
})
