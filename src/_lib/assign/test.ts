/* eslint-env mocha */

import assert from 'assert'
import assign from '.'

describe('assign', () => {
  it('assigns properties of the second argument to the first argument', () => {
    var object = {}
    assign(object, { a: 1, b: 2, c: 3 })
    assert.deepStrictEqual(object, { a: 1, b: 2, c: 3 })
  })

  it('the object passed as 2nd argument remains unchanged when the result is mutated', () => {
    var object = { a: 1, b: 2, c: 3 }
    var result = assign({}, object)
    result.c = 4
    assert.deepStrictEqual(object, { a: 1, b: 2, c: 3 })
  })

  it('returns the first argument when the second argument is `undefined`', () => {
    var original = { a: 1, b: 2, c: 3 }
    var result = assign(original, undefined)
    assert(original === result)
  })

  it('throws TypeError exception if the first argument is `undefined', () => {
    assert.throws(assign.bind(null, undefined, { a: 1, b: 2, c: 3 }), TypeError)
  })
})
