/* eslint-env mocha */

import assert from 'assert'
import startOfCentury from '.'

describe('startOfCentury', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a century', () => {
    const date = new Date(1953, 3 /* Apr */, 13)
    const result = startOfCentury(date)
    assert.deepStrictEqual(result, new Date(1900, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', () => {
    const date = new Date(1984, 9 /* Oct */, 14).getTime()
    const result = startOfCentury(date)
    assert.deepStrictEqual(result, new Date(1900, 0 /* Jan */, 1))
  })

  it('does not mutate the original date', () => {
    const date = new Date(1978, 10 /* Nov */, 14)
    startOfCentury(date)
    assert.deepStrictEqual(date, new Date(1978, 10 /* Nov */, 14))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = startOfCentury(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(startOfCentury.bind(null), TypeError)
  })
})
