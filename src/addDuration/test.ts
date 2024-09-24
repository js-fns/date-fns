/* eslint-env mocha */

import assert from 'assert'
import addDuration from './index'

describe('addDuration', () => {
  it('adds the given number of seconds', () => {
    const result = addDuration({ years: 1, seconds: 2 }, { seconds: 10 })
    assert.deepStrictEqual(result, { years: 1, seconds: 12 })
  })

  it('adds the given number of minutes', () => {
    const result = addDuration({ minutes: 10 }, { minutes: 10 })
    assert.deepStrictEqual(result, { minutes: 20 })
  })

  it('adds the given number of hours', () => {
    const result = addDuration({ hours: 10 }, { hours: 10 })
    assert.deepStrictEqual(result, { hours: 20 })
  })

  it('adds the given number of days', () => {
    const result = addDuration({ days: 10 }, { days: 10 })
    assert.deepStrictEqual(result, { days: 20 })
  })

  it('adds the given number of weeks', () => {
    const result = addDuration({ weeks: 4 }, { weeks: 4 })
    assert.deepStrictEqual(result, { weeks: 8 })
  })

  it('adds the given number of months', () => {
    const result = addDuration({ months: 4 }, { months: 4 })
    assert.deepStrictEqual(result, { months: 8 })
  })

  it('adds the given number of years', () => {
    const result = addDuration({ years: 10 }, { years: 10 })
    assert.deepStrictEqual(result, { years: 20 })
  })

  it('adds the given number of years months weeks days hours minutes seconds', () => {
    const result = addDuration(
      {
        years: 1,
        months: 2,
        weeks: 2,
        days: 3,
        hours: 2,
        minutes: 25,
        seconds: 30,
      },
      {
        years: 1,
        months: 2,
        weeks: 2,
        days: 3,
        hours: 2,
        minutes: 25,
        seconds: 30,
      }
    )
    assert.deepStrictEqual(result, {
      years: 2,
      months: 4,
      weeks: 4,
      days: 6,
      hours: 4,
      minutes: 50,
      seconds: 60,
    })
  })

  it('returns TypeError it should be a number', () => {
    try {
      addDuration({ days: NaN }, { days: 10 })
    } catch (error) {
      assert.deepStrictEqual(
        error,
        new TypeError('days should not be NaN, it should be a number')
      )
    }
  })
})
