/* eslint-env mocha */

import assert from 'assert'
import { afterEach, beforeEach, describe, it } from 'vitest'
import sinon from 'sinon'
import isLastWeek from './index'

describe('isLastWeek', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2023, 4 /* May */, 8).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is last week', () => {
    const result = isLastWeek(new Date(2023, 4 /* May */, 1))
    assert(result === true)
  })

  it('returns false if the given date is not last week', () => {
    const result = isLastWeek(new Date(2023, 4 /* May */, 15))
    assert(result === false)
  })
})
