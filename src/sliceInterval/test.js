// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sliceInterval from '.'

describe('sliceInterval', function() {
  it('return a new array with subtracted intervals', function() {
    var interval = {
      start: new Date(2019, 10, 10, 9, 0),
      end: new Date(2019, 10, 10, 18, 0)
    }
    var remove = {
      start: new Date(2019, 10, 10, 12, 0),
      end: new Date(2019, 10, 10, 14, 0)
    }
    var [firstResult] = sliceInterval([interval], remove)
    assert.deepEqual(firstResult, [
      {
        start: new Date(2019, 10, 10, 9, 0),
        end: new Date(2019, 10, 10, 12, 0)
      },
      {
        start: new Date(2019, 10, 10, 14, 0),
        end: new Date(2019, 10, 10, 18, 0)
      }
    ])
  })
})
