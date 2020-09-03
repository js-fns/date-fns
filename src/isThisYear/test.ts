// @flow
/* eslint-env mocha */

// @ts-expect-error ts-migrate(1259) FIXME: Module '"assert"' can only be default-imported usi... Remove this comment to see the full error message
import assert from 'assert'
import sinon from 'sinon'
import isThisYear from '.'

describe('isThisYear', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same year', () => {
    var date = new Date(2014, 6 /* Jul */, 2)
    assert(isThisYear(date) === true)
  })

  it('returns false if the given date and the current date have different years', () => {
    var date = new Date(2015, 6 /* Jul */, 2)
    assert(isThisYear(date) === false)
  })

  it('accepts a timestamp', () => {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    assert(isThisYear(date) === true)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isThisYear.bind(null), TypeError)
  })
})
