/* eslint-env mocha */

import assert from 'assert'
import { afterEach, beforeEach, describe, it } from 'vitest'
import sinon from 'sinon'
import isNextMonth from './index'

describe('isNextMonth', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2023, 4 /* May */, 8).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is next month', () => {
    const result = isNextMonth(new Date(2023, 5 /* Jun */, 8))
    assert(result === true)
  })

  it('returns false if the given date is not next month', () => {
    const result = isNextMonth(new Date(2023, 3 /* Apr */, 8))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isNextMonth(new Date(2023, 5 /* Apr */, 8).getTime())
    assert(result === true)
  })
})

describe('isNextMonth from December current date', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2023, 11 /* Dec */, 31).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is next month (January) and the current month December', () => {
    const result = isNextMonth(new Date(2024, 0 /* Jan */, 1))
    assert(result === true)
  })
})
