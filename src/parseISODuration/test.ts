/* eslint-env mocha */

import assert from 'assert'
import parseISODuration from '.'

describe('parseISODuration', () => {
  describe('parsing', () => {
    it('parses with all members', () => {
      const result = parseISODuration('P2.2Y3.3M4.4DT5.5H6.6M7.7S')
      assert.deepStrictEqual(result, {
        years: 2.2,
        months: 3.3,
        days: 4.4,
        hours: 5.5,
        minutes: 6.6,
        seconds: 7.7,
      })
    })

    it('parses without time', () => {
      const result = parseISODuration('P2Y3M5D')
      assert.deepStrictEqual(result, { years: 2, months: 3, days: 5 })
    })

    it('parses missing years without time', () => {
      const result = parseISODuration('P3M5D')
      assert.deepStrictEqual(result, { months: 3, days: 5 })
    })

    it('parses missing months without time', () => {
      const result = parseISODuration('P2Y5D')
      assert.deepStrictEqual(result, { years: 2, days: 5 })
    })

    it('parses missing days without time', () => {
      const result = parseISODuration('P2Y3M')
      assert.deepStrictEqual(result, { years: 2, months: 3 })
    })

    it('parses without days', () => {
      const result = parseISODuration('PT65H40M22S')
      assert.deepStrictEqual(result, { hours: 65, minutes: 40, seconds: 22 })
    })

    it('parses missing hours without date', () => {
      const result = parseISODuration('PT3M4S')
      assert.deepStrictEqual(result, { minutes: 3, seconds: 4 })
    })

    it('parses missing minutes without date', () => {
      const result = parseISODuration('PT2H4S')
      assert.deepStrictEqual(result, { hours: 2, seconds: 4 })
    })

    it('parses missing seconds without date', () => {
      const result = parseISODuration('PT2H3M')
      assert.deepStrictEqual(result, { hours: 2, minutes: 3 })
    })
  })

  describe('validation', () => {
    it('returns `{}` for invalid string', () => {
      const result = parseISODuration('abcdef')
      assert(Object.keys(result).length === 0)
    })

    it('returns {} when all parts are missing', () => {
      const result = parseISODuration('P')
      assert(Object.keys(result).length === 0)
    })

    it('returns {} for non-string', () => {
      // @ts-expect-error
      const result = parseISODuration(150)
      assert(Object.keys(result).length === 0)
    })

    it('throws TypeError exception if passed less than 1 argument', () => {
      // @ts-expect-error
      assert.throws(parseISODuration.bind(null), TypeError)
    })
  })
})
