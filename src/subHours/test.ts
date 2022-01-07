// @flow
/* eslint-env mocha */

import assert from 'assert'
import subHours from '.'

describe('subHours', () => {
  it('subtracts the given numbers of hours', () => {
    const result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), 2)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('accepts a timestamp', () => {
    const result = subHours(new Date(2014, 6 /* Jul */, 12, 1, 0).getTime(), 26)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('converts a fractional number to an integer', () => {
    const result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), 2.22)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('implicitly converts number arguments', () => {
    // $ExpectedMistake
    // @ts-expect-error
    const result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), '2')
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 6 /* Jul */, 10, 23, 0)
    subHours(date, 10)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = subHours(new Date(NaN), 2)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    assert.throws(subHours.bind(null), TypeError)
    assert.throws(subHours.bind(null, 1), TypeError)
  })
})
