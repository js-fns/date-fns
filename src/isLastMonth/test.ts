/* eslint-env mocha */

import assert from 'assert'
import { afterEach, beforeEach, describe, it } from 'vitest'
import sinon from 'sinon'
import isLastMonth from './index'

describe('isLastMonth', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2023, 4 /* May */, 8).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is last month', () => {
    const result = isLastMonth(new Date(2023, 3 /* Apr */, 8))
    assert(result === true)
  })

  it('returns false if the given date is not last month', () => {
    const result = isLastMonth(new Date(2023, 2 /* Mar */, 8))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isLastMonth(new Date(2023, 3 /* Apr */, 8).getTime())
    assert(result === true)
  })
})

describe('isLastMonth from January current date', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2024, 0 /* Jan */, 1).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is last month (December) and the current month January', () => {
    const result = isLastMonth(new Date(2023, 11 /* Dec */, 8))
    assert(result === true)
  })
})
