/* eslint-env mocha */

import assert from 'assert'
import { afterEach, beforeEach, describe, it } from 'vitest'
import sinon from 'sinon'
import isLastYear from './index'

describe('isLastYear', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2023, 4 /* May */, 8).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is last year', () => {
    const result = isLastYear(new Date(2022, 3 /* Apr */, 8))
    assert(result === true)
  })

  it('returns false if the given date is not last year', () => {
    const result = isLastYear(new Date(2023, 3 /* Apr */, 8))
    assert(result === false)
  })
})
