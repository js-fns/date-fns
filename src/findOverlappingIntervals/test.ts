/* eslint-env mocha */

import assert from 'assert'
import type { Interval } from '../types'
import findOverlappingIntervals from './index'

describe('findOverlappingIntervals', () => {
  describe('when no time intervals overlap', () => {
    it('returns empty array for non overlapping intervals in different days', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19),
        end: new Date(2023, 1, 20),
      }
      const secondInterval: Interval = {
        start: new Date(2023, 1, 21),
        end: new Date(2023, 1, 22),
      }
      const thirdInterval: Interval = {
        start: new Date(2023, 1, 23),
        end: new Date(2023, 1, 24),
      }
      const intervals = [firstInterval, secondInterval, thirdInterval]

      const result = findOverlappingIntervals(intervals)
      assert(result.length === 0)
    })

    it('returns empty array for non overlapping same-day intervals', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 10),
        end: new Date(2023, 1, 19, 11),
      }
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 12),
        end: new Date(2023, 1, 19, 13),
      }
      const thirdInterval: Interval = {
        start: new Date(2023, 1, 19, 14),
        end: new Date(2023, 1, 19, 15),
      }
      const intervals = [firstInterval, secondInterval, thirdInterval]

      const result = findOverlappingIntervals(intervals)
      assert(result.length === 0)
    })

    it('returns empty array for non-overlapping adjacent intervals', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 10),
        end: new Date(2023, 1, 19, 11),
      }
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 11),
        end: new Date(2023, 1, 19, 12),
      }
      const thirdInterval: Interval = {
        start: new Date(2023, 1, 19, 12),
        end: new Date(2023, 1, 19, 13),
      }
      const intervals = [firstInterval, secondInterval, thirdInterval]

      const result = findOverlappingIntervals(intervals)
      assert(result.length === 0)
    })
  })

  describe('when the time intervals overlap', () => {
    it('returns an array containing the second interval if that is included in the first one', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 10),
        end: new Date(2023, 1, 19, 18),
      }
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 12),
        end: new Date(2023, 1, 19, 16),
      }
      const intervals = [firstInterval, secondInterval]

      const result = findOverlappingIntervals(intervals)
      assert(result.length === 1)
      assert(
        result[0].start.valueOf() === secondInterval.start.valueOf() &&
          result[0].end.valueOf() === secondInterval.end.valueOf()
      )
    })

    it('returns the common interval between two overlapping intervals', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 10),
        end: new Date(2023, 1, 19, 18),
      }
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 16),
        end: new Date(2023, 1, 19, 20),
      }
      const intervals = [firstInterval, secondInterval]

      const result = findOverlappingIntervals(intervals)
      assert(result.length === 1)
      assert(
        result[0].start.valueOf() === secondInterval.start.valueOf() &&
          result[0].end.valueOf() === firstInterval.end.valueOf()
      )
    })

    it('returns two common intervals between three intervals', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 9),
        end: new Date(2023, 1, 19, 12),
      }
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 11),
        end: new Date(2023, 1, 19, 15),
      }
      const thirdInterval: Interval = {
        start: new Date(2023, 1, 19, 14),
        end: new Date(2023, 1, 19, 20),
      }
      const intervals = [firstInterval, secondInterval, thirdInterval]

      const expectedResult: Interval[] = [
        {
          start: new Date(2023, 1, 19, 11),
          end: new Date(2023, 1, 19, 12),
        },
        {
          start: new Date(2023, 1, 19, 14),
          end: new Date(2023, 1, 19, 15),
        },
      ]

      const result = findOverlappingIntervals(intervals)
      assert(result.length === 2)
      expectedResult.forEach((res, index) => {
        assert(
          res.start.valueOf() === result[index].start.valueOf() &&
            res.end.valueOf() === result[index].end.valueOf()
        )
      })
    })

    it('returns the common interval between three overlapping intervals', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 10),
        end: new Date(2023, 1, 19, 20),
      }
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 12),
        end: new Date(2023, 1, 19, 18),
      }
      const thirdInterval: Interval = {
        start: new Date(2023, 1, 19, 14),
        end: new Date(2023, 1, 19, 16),
      }
      const intervals = [firstInterval, secondInterval, thirdInterval]

      const expectedResult: Interval[] = [
        {
          start: new Date(2023, 1, 19, 14),
          end: new Date(2023, 1, 19, 16),
        },
      ]

      const result = findOverlappingIntervals(intervals)
      assert(result.length === 1)
      expectedResult.forEach((res, index) => {
        assert(
          res.start.valueOf() === result[index].start.valueOf() &&
            res.end.valueOf() === result[index].end.valueOf()
        )
      })
    })

    it('returns common intervals between multiple overlapping intervals', () => {
      const intervals: Interval[] = [
        {
          start: new Date(2023, 1, 10, 8),
          end: new Date(2023, 1, 11, 18),
        },
        {
          start: new Date(2023, 1, 10, 7),
          end: new Date(2023, 1, 10, 10),
        },
        {
          start: new Date(2023, 1, 10, 9),
          end: new Date(2023, 1, 10, 11),
        },
        {
          start: new Date(2023, 1, 11, 10),
          end: new Date(2023, 1, 12, 10),
        },
        {
          start: new Date(2023, 1, 12, 8),
          end: new Date(2023, 1, 12, 18),
        },
        {
          start: new Date(2023, 1, 11, 9),
          end: new Date(2023, 1, 11, 11),
        },
      ]

      const expectedResult: Interval[] = [
        {
          start: new Date(2023, 1, 10, 9),
          end: new Date(2023, 1, 10, 10),
        },
        {
          start: new Date(2023, 1, 11, 10),
          end: new Date(2023, 1, 11, 11),
        },
        {
          start: new Date(2023, 1, 12, 8),
          end: new Date(2023, 1, 12, 10),
        },
      ]

      const result = findOverlappingIntervals(intervals)
      assert(result.length === 3)
      expectedResult.forEach((res, index) => {
        assert(
          res.start.valueOf() === result[index].start.valueOf() &&
            res.end.valueOf() === result[index].end.valueOf()
        )
      })
    })
  })

  it('accepts timestamp', () => {
    const firstInterval: Interval = {
      start: new Date(2023, 1, 19, 15, 30).getTime(),
      end: new Date(2023, 1, 19, 17, 30).getTime(),
    }
    const secondInterval: Interval = {
      start: new Date(2023, 1, 19, 17, 0).getTime(),
      end: new Date(2023, 1, 19, 18, 45).getTime(),
    }
    const intervals = [firstInterval, secondInterval]

    const result = findOverlappingIntervals(intervals)
    assert(result.length === 1)
    assert(
      result[0].start.valueOf() === secondInterval.start.valueOf() &&
        result[0].end.valueOf() === firstInterval.end.valueOf()
    )
  })

  it('throws an exception if the start date of any time interval is after the end date', () => {
    const block = findOverlappingIntervals.bind(null, [
      { start: new Date(2023, 1, 19), end: new Date(2023, 1, 20) },
      { start: new Date(2023, 1, 20), end: new Date(2023, 1, 19) },
    ])
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date of any time interval is `Invalid Date`', () => {
    const block = findOverlappingIntervals.bind(null, [
      { start: new Date(NaN), end: new Date(2023, 1, 20) },
      { start: new Date(2023, 1, 20), end: new Date(2023, 1, 19) },
    ])
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date of any time interval is `Invalid Date`', () => {
    const block = findOverlappingIntervals.bind(null, [
      { start: new Date(2023, 1, 19), end: new Date(2023, 1, 20) },
      { start: new Date(2023, 1, 20), end: new Date(NaN) },
    ])
    assert.throws(block, RangeError)
  })
})
