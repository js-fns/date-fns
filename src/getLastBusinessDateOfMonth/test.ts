/* eslint-env mocha */

import assert from 'assert'
import getLastBusinessDateOfMonth from '.'

describe('getLastBusinessDateOfMonth', () => {
  it('returns the last business date of the month of the given date', () => {
    let result = 1
    result = getLastBusinessDateOfMonth(new Date(2022, 9 /* Oct */, 10))
    assert(result === 31)

    result = getLastBusinessDateOfMonth(new Date(2022, 4 /* May */, 21))
    assert(result === 31)

    result = getLastBusinessDateOfMonth(new Date(2022, 5 /* Jun */, 20))
    assert(result === 30)

    result = getLastBusinessDateOfMonth(new Date(2022, 0 /* Jan */, 11))
    assert(result === 31)

    result = getLastBusinessDateOfMonth(new Date(2022, 3 /* Apr */, 1))
    assert(result === 29)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getLastBusinessDateOfMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getLastBusinessDateOfMonth.bind(null), TypeError)
  })
})
