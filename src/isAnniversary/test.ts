// @flow
/* eslint-env mocha */

import assert from 'assert'
import isAnniversary from '.'

describe('isAnniversary', function () {
  it('identifies anniversaries correctly', function () {
    let result
    const anniversary = new Date(2014, 6 /* Jul */, 2)

    result = isAnniversary(anniversary, new Date(2020, 6 /* Jul */, 2))
    assert(result === true)

    result = isAnniversary(anniversary, new Date(2020, 6 /* Jul */, 1))
    assert(result === false)
  })

  it('is the anniversary day for the whole day', function () {
    let result
    const anniversary = new Date(2014, 6 /* Jul */, 2)

    result = isAnniversary(
      anniversary,
      new Date(2020, 6 /* Jul */, 1, 23, 59, 59, 999)
    )
    assert(result === false)

    result = isAnniversary(anniversary, new Date(2020, 6 /* Jul */, 2))
    assert(result === true)

    result = isAnniversary(anniversary, new Date(2020, 6 /* Jul */, 2, 1))
    assert(result === true)

    result = isAnniversary(
      anniversary,
      new Date(2020, 6 /* Jul */, 2, 23, 59, 59, 999)
    )
    assert(result === true)

    result = isAnniversary(anniversary, new Date(2020, 6 /* Jul */, 3))
    assert(result === false)
  })

  it('handles leap year anniversaries correctly', function () {
    const feb29 = new Date(2020, 1, 29)
    let result

    // target year is also leap year
    result = isAnniversary(feb29, new Date(2024, 1, 28))
    assert(result === false)
    result = isAnniversary(feb29, new Date(2024, 1, 29))
    assert(result === true)
    result = isAnniversary(feb29, new Date(2024, 2, 1))
    assert(result === false)

    // target leap year is not leap year, 3 possible resolve behaviors:

    // resolve as March 1st (default)
    result = isAnniversary(feb29, new Date(2023, 1, 28), 'mar1')
    assert(result === false)
    result = isAnniversary(feb29, new Date(2023, 2, 1), 'mar1')
    assert(result === true)

    // resolve as February 28th
    result = isAnniversary(feb29, new Date(2023, 1, 28), 'feb28')
    assert(result === true)
    result = isAnniversary(feb29, new Date(2023, 2, 1), 'feb28')
    assert(result === false)

    // invalid
    result = isAnniversary(feb29, new Date(2023, 1, 28), 'invalid')
    assert(result === false)
    result = isAnniversary(feb29, new Date(2023, 2, 1), 'invalid')
    assert(result === false)
  })

  it('accepts a timestamp for either dates', function () {
    const result = isAnniversary(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      new Date(2020, 6 /* Jul */, 2).getTime()
    )
    assert(result === true)
  })

  it('returns false if the given date or anniversary date are invalid', function () {
    let result

    result = isAnniversary(new Date(NaN), new Date())
    assert(result === false)

    result = isAnniversary(new Date(), new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    // @ts-expect-error
    assert.throws(isAnniversary.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(isAnniversary.bind(null, 1), TypeError)
  })
})
