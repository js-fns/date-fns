/* eslint-env mocha */

import { describe, it } from 'vitest'
import { parseISODuration } from './index'
import assert from 'assert'

describe('parseISODuration', () => {
  it('complete ISO duration P3Y6M1W4DT12H30M5S', () => {
    const result = parseISODuration('P3Y6M1W4DT12H30M5S')
    assert.deepStrictEqual(result, {
      years: 3,
      months: 6,
      weeks: 1,
      days: 4,
      hours: 12,
      minutes: 30,
      seconds: 5,
    })
  })

  it('reduced ISO duration without time P1M', () => {
    const result = parseISODuration('P1M')
    assert.deepStrictEqual(result, {
      years: 0,
      months: 1,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it('reduced ISO duration P1D', () => {
    const result = parseISODuration('P1D')
    assert.deepStrictEqual(result, {
      years: 0,
      months: 0,
      weeks: 0,
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it('reduced ISO duration P23DT23H', () => {
    const result = parseISODuration('P23DT23H')
    assert.deepStrictEqual(result, {
      years: 0,
      months: 0,
      weeks: 0,
      days: 23,
      hours: 23,
      minutes: 0,
      seconds: 0,
    })
  })

  it('ISO duration with full stop P1Y2M4DT20H44M12.67S', () => {
    const result = parseISODuration('P1Y2M4DT20H44M12.67S')
    assert.deepStrictEqual(result, {
      years: 1,
      months: 2,
      weeks: 0,
      days: 4,
      hours: 20,
      minutes: 44,
      seconds: 12.67,
    })
  })

  it('ISO duration with comma P1Y2M4DT20H44M12,67S', () => {
    const result = parseISODuration('P1Y2M4DT20H44M12,67S')
    assert.deepStrictEqual(result, {
      years: 1,
      months: 2,
      weeks: 0,
      days: 4,
      hours: 20,
      minutes: 44,
      seconds: 12.67,
    })
  })

  it('ISO duration with full stop P0.5Y', () => {
    const result = parseISODuration('P0.5Y')
    assert.deepStrictEqual(result, {
      years: 0.5,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it('ISO duration just with time PT0.5S', () => {
    const result = parseISODuration('PT0.5S')
    assert.deepStrictEqual(result, {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0.5,
    })
  })

  it('returns `Invalid format` for invalid ISO string', () => {
    assert.throws(() => parseISODuration('T1PSO'), RangeError("Invalid format"))
  })
})
