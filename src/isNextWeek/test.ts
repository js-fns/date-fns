/* eslint-env mocha */

import assert from 'assert'
import { afterEach, beforeEach, describe, it } from 'vitest'
import sinon from 'sinon'
import isNextWeek from './index'

describe('isNextWeek', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2023, 4 /* May */, 8).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is next week', () => {
    const result = isNextWeek(new Date(2023, 4 /* May */, 15))
    assert(result === true)
  })

  it('returns false if the given date is not next week', () => {
    const result = isNextWeek(new Date(2023, 4 /* May */, 1))
    assert(result === false)
  })
})
