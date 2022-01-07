// @flow
/* eslint-env mocha */

import assert from 'assert'
import endOfMinute from '.'

describe('endOfMinute', () => {
  it('returns the date with the time set to the last millisecond before a minute ends', () => {
    const date = new Date(2014, 11, 1, 22, 15)
    const result = endOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('accepts a timestamp', () => {
    const result = endOfMinute(new Date(2014, 11, 1, 22, 15).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 11, 1, 22, 15)
    endOfMinute(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = endOfMinute(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(endOfMinute.bind(null), TypeError)
  })
})
