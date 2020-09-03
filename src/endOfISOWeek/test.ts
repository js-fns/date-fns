// @flow
/* eslint-env mocha */
import assert from 'assert'

import endOfISOWeek from '.'


describe('endOfISOWeek', function() {
  it('returns the date with the time set to 23:59:59:999 and the date set to the last day of an ISO week', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999))
  })

  it('accepts a timestamp', function() {
    var date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime()
    var result = endOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 16, 23, 59, 59, 999))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfISOWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = endOfISOWeek(new Date(NaN))
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfISOWeek.bind(null), TypeError)
  })
})
