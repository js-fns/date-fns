/* eslint-env mocha */

import assert from 'assert'
import getCentury from '.'

describe('getCentury', () => {
  it('returns the century for a the given date', () => {
    const result = getCentury(new Date(1971, 10 /* Nov */, 8))
    assert(result === 1900)
  })

  it('accepts a timestamp', () => {
    const result = getCentury(new Date(1969, 6 /* Jul */, 20).getTime())
    assert(result === 1900)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getCentury(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getCentury.bind(null), TypeError)
  })
})
