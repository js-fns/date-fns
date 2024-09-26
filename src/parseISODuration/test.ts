/* eslint-env mocha */

import { describe, expect, it } from 'vitest'
import { parseISODuration } from './index'

describe('parseISODuration', () => {
  it('parses complete ISO duration P3Y6M1W4DT12H30M5S', () => {
    const result = parseISODuration('P3Y6M1W4DT12H30M5S')
    expect(result).toEqual({
      years: 3,
      months: 6,
      weeks: 1,
      days: 4,
      hours: 12,
      minutes: 30,
      seconds: 5,
    })
  })

  it('parses partial ISO duration without time P1M', () => {
    const result = parseISODuration('P1M')
    expect(result).toEqual({
      months: 1,
    })
  })

  it('parses partial ISO duration with days P1D', () => {
    const result = parseISODuration('P1D')
    expect(result).toEqual({
      days: 1,
    })
  })

  it('parses partial ISO duration with time PT1M', () => {
    const result = parseISODuration('PT1M')
    expect(result).toEqual({
      minutes: 1,
    })
  })

  it('parses ISO duration without normalizing P23DT3000H', () => {
    const result = parseISODuration('P23DT3000H')
    expect(result).toEqual({
      days: 23,
      hours: 3000,
    })
  })

  it('parses ISO duration with period P1Y2M4DT20H44M12.67S', () => {
    const result = parseISODuration('P1Y2M4DT20H44M12.67S')
    expect(result).toEqual({
      years: 1,
      months: 2,
      days: 4,
      hours: 20,
      minutes: 44,
      seconds: 12.67,
    })
  })

  it('parses ISO duration with comma P1Y2M4DT20H44M12,67S', () => {
    const result = parseISODuration('P1Y2M4DT20H44M12,67S')
    expect(result).toEqual({
      years: 1,
      months: 2,
      days: 4,
      hours: 20,
      minutes: 44,
      seconds: 12.67,
    })
  })

  it('parses ISO duration with period in year P0.5Y', () => {
    const result = parseISODuration('P0.5Y')
    expect(result).toEqual({
      years: 0.5,
    })
  })

  it('parses ISO duration with zero values', () => {
    const result = parseISODuration('P0DT0S')
    expect(result).toEqual({
      days: 0,
      seconds: 0,
    })
  })

  it('returns `Invalid format` for empty string', () => {
    expect(() => parseISODuration('')).toThrow(RangeError("Invalid format"))
  })

  it('returns `Invalid format` for ISO duration with just P', () => {
    expect(() => parseISODuration('P')).toThrow(RangeError("Invalid format"))
  })

  it('returns `Invalid format` for ISO duration with nothing after T', () => {
    expect(() => parseISODuration('P1MT')).toThrow(RangeError("Invalid format"))
  })

  it('returns `Invalid format` for ISO duration with missing value', () => {
    expect(() => parseISODuration('P3YT30MS')).toThrow(RangeError("Invalid format"))
  })

  it('returns `Invalid format` for invalid ISO string', () => {
    expect(() => parseISODuration('T1PSO')).toThrow(RangeError("Invalid format"))
  })

  it('returns `Invalid format` for ISO string with missing T', () => {
    expect(() => parseISODuration('P1H')).toThrow(RangeError("Invalid format"))
  })

  it('returns `Invalid format` for ISO string with unnecessary T', () => {
    expect(() => parseISODuration('PT1D')).toThrow(RangeError("Invalid format"))
  })

  it('returns `Invalid format` for out of order ISO string', () => {
    expect(() => parseISODuration('P1W1YT1M')).toThrow(RangeError("Invalid format"))
  })
})
