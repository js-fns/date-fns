/* eslint-env mocha */

import assert from 'assert'
import getMillenium from '.'

describe('getMillenium', () => {
  it('returns the millenium for a the given date', () => {
    const result = getMillenium(new Date(1971, 10 /* Nov */, 8))
    assert(result === 1000)
  })

  it('accepts a timestamp', () => {
    const result = getMillenium(new Date(1969, 6 /* Jul */, 20).getTime())
    assert(result === 1000)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getMillenium(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getMillenium.bind(null), TypeError)
  })
})
