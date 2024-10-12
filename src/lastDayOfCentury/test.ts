/* eslint-env mocha */

import assert from 'assert'
import lastDayOfCentury from '.'

describe('lastDayOfCentury', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a decade', () => {
    const date = new Date(1985, 9 /* Oct */, 20)
    const result = lastDayOfCentury(date)
    assert.deepStrictEqual(result, new Date(1999, 11 /* Dec */, 31))
  })

  it('accepts a timestamp', () => {
    const date = new Date(1975, 0 /* Jan */, 19).getTime()
    const result = lastDayOfCentury(date)
    assert.deepStrictEqual(result, new Date(1999, 11 /* Dec */, 31))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2013, 3 /* Apr */, 23)
    lastDayOfCentury(date)
    assert.deepStrictEqual(date, new Date(2013, 3 /* Apr */, 23))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = lastDayOfCentury(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(lastDayOfCentury.bind(null), TypeError)
  })
})
