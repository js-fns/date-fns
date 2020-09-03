// @flow
/* eslint-env mocha */

// @ts-expect-error ts-migrate(1259) FIXME: Module '"assert"' can only be default-imported usi... Remove this comment to see the full error message
import assert from 'assert'
import sinon from 'sinon'
import isThisQuarter from '.'

describe('isThisQuarter', function() {
  let clock
  beforeEach(function() {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(function() {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same quarter (and year)', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    assert(isThisQuarter(date) === true)
  })

  it('returns false if the given date and the current date have different quarters', function() {
    const date = new Date(2014, 1 /* Feb */, 11)
    assert(isThisQuarter(date) === false)
  })

  it('accepts a timestamp', function() {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    assert(isThisQuarter(date) === true)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isThisQuarter.bind(null), TypeError)
  })
})
