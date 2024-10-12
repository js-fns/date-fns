// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import memoFormat from '.'

describe('format', function () {
  it('accepts a timestamp', function () {
    const date = new Date(2014, 3, 4).getTime()
    const memoized = memoFormat('yyyy-MM-dd')
    assert(memoized(date) === '2014-04-04')
  })
})
