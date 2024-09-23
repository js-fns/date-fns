// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isBeforeDay from '.'

describe('isBeforeDay', function() {
  it('returns true if the first date is before the second one by day', function() {
    var result = isBeforeDay(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 11)
    )
    assert(result === true)
  })

  it('returns false if the first date is after the second one by day', function() {
    var result = isBeforeDay(
      new Date(1989, 6 /* Jul */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the first date is equal to the second one by day', function() {
    var result = isBeforeDay(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the first date is before the second one by hour', function() {
    var result = isBeforeDay(
      new Date(1989, 6 /* Jul */, 10, 14),
      new Date(1989, 6 /* Jul */, 10, 15)
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isBeforeDay(
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1989, 6 /* Jul */, 11).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    var result = isBeforeDay(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    var result = isBeforeDay(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    var result = isBeforeDay(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isBeforeDay.bind(null), TypeError)
    assert.throws(isBeforeDay.bind(null, 1), TypeError)
  })
})
