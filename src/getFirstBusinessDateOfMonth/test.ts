/* eslint-env mocha */

import assert from 'assert'
import getFirstBusinessDateOfMonth from '.'

describe('getFirstBusinessDateOfMonth', () => {
  it('returns the first business date of the month of the given date', () => {
    let result = 1
    result = getFirstBusinessDateOfMonth(new Date(2022, 9 /* Oct */, 1))
    assert(result === 3)

    result = getFirstBusinessDateOfMonth(new Date(2022, 4 /* May */, 1))
    assert(result === 2)

    result = getFirstBusinessDateOfMonth(new Date(2022, 5 /* Jun */, 1))
    assert(result === 1)

    result = getFirstBusinessDateOfMonth(new Date(2022, 0 /* Jan */, 1))
    assert(result === 3)

    result = getFirstBusinessDateOfMonth(new Date(2022, 3 /* Apr */, 1))
    assert(result === 1)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getFirstBusinessDateOfMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getFirstBusinessDateOfMonth.bind(null), TypeError)
  })
})
