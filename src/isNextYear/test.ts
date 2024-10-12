/* eslint-env mocha */

import assert from 'assert'
import { afterEach, beforeEach, describe, it } from 'vitest'
import sinon from 'sinon'
import isNextYear from './index'

describe('isNextYear', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2023, 4 /* May */, 8).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is next year', () => {
    const result = isNextYear(new Date(2024, 3 /* Apr */, 8))
    assert(result === true)
  })

  it('returns false if the given date is not next year', () => {
    const result = isNextYear(new Date(2023, 3 /* Apr */, 8))
    assert(result === false)
  })
})
