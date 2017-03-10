// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getMinutes from '.'

describe('getMinutes', function () {
  it('returns the minutes of the given date', function () {
    var result = getMinutes(new Date(2012, 1 /* Feb */, 29, 11, 45, 5))
    assert(result === 45)
  })

  it('accepts a string', function () {
    var result = getMinutes(new Date(2014, 6 /* Jul */, 2, 5).toISOString())
    assert(result === 0)
  })

  it('accepts a timestamp', function () {
    var result = getMinutes(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime())
    assert(result === 30)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getMinutes(new Date(NaN))
    assert(isNaN(result))
  })
})
