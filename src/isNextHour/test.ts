/* eslint-env mocha */

import assert from 'assert'
import { afterEach, beforeEach, describe, it } from 'vitest'
import sinon from 'sinon'
import isNextHour from './index'

describe('isNextHour', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2023, 4 /* May */, 8, 8, 0).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is next hour', () => {
    const result = isNextHour(new Date(2023, 4 /* May */, 8, 9, 0))
    assert(result === true)
  })

  it('returns false if the given date is not next hour', () => {
    const result = isNextHour(new Date(2023, 4 /* May */, 8, 7, 0))
    assert(result === false)
  })
})
