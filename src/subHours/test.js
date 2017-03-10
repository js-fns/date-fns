// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subHours from '.'

describe('subHours', function () {
  it('subtracts the given numbers of hours', function () {
    var result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), 2)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('accepts a string', function () {
    var result = subHours(
      new Date(2014, 6 /* Jul */, 12, 1, 0).toISOString(), 26
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('accepts a timestamp', function () {
    var result = subHours(
      new Date(2014, 6 /* Jul */, 12, 1, 0).getTime(), 26
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), '2')
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 23, 0)
    subHours(date, 10)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = subHours(new Date(NaN), 2)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), NaN)
    assert(result instanceof Date && isNaN(result))
  })
})
