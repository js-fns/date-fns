/* eslint-env mocha */

import assert from 'assert'
import endOfMillenium from '.'

describe('endOfMillenium', () => {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last millisecond of a millenium', () => {
    const date = new Date(2017, 3 /* Apr */, 10, 0, 0, 0)
    const result = endOfMillenium(date)
    assert.deepStrictEqual(
      result,
      new Date(2999, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', () => {
    const date = new Date(2007, 9 /* Oct */, 10, 0, 0, 0).getTime()
    const result = endOfMillenium(date)
    assert.deepStrictEqual(
      result,
      new Date(2999, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', () => {
    const date = new Date(2038, 0 /* Jan */, 19, 3, 14, 8)
    endOfMillenium(date)
    assert.deepStrictEqual(date, new Date(2038, 0 /* Jan */, 19, 3, 14, 8))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = endOfMillenium(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(endOfMillenium.bind(null), TypeError)
  })
})
