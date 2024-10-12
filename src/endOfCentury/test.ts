/* eslint-env mocha */

import assert from 'assert'
import endOfCentury from '.'

describe('endOfCentury', () => {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last millisecond of a century', () => {
    const date = new Date(2017, 3 /* Apr */, 10, 0, 0, 0)
    const result = endOfCentury(date)
    assert.deepStrictEqual(
      result,
      new Date(2099, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', () => {
    const date = new Date(2007, 9 /* Oct */, 10, 0, 0, 0).getTime()
    const result = endOfCentury(date)
    assert.deepStrictEqual(
      result,
      new Date(2099, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', () => {
    const date = new Date(2038, 0 /* Jan */, 19, 3, 14, 8)
    endOfCentury(date)
    assert.deepStrictEqual(date, new Date(2038, 0 /* Jan */, 19, 3, 14, 8))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = endOfCentury(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(endOfCentury.bind(null), TypeError)
  })
})
