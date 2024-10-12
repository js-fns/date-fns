import cumulateDurations from './index'

describe('cumulateDurations', () => {
  it.each([
    {
      durations: [{ minutes: 1 }, { minutes: 1 }],
      expectedResult: { seconds: 0, minutes: 2, hours: 0, days: 0, weeks: 0 },
    },
    {
      durations: [{ minutes: 1 }, { minutes: -1 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 0 },
    },
    {
      durations: [{ minutes: 30 }, { minutes: 30 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 1, days: 0, weeks: 0 },
    },
    {
      durations: [{ minutes: 30 }, { minutes: 60 }],
      expectedResult: { seconds: 0, minutes: 30, hours: 1, days: 0, weeks: 0 },
    },
    {
      durations: [{ hours: 1 }, { hours: 1 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 2, days: 0, weeks: 0 },
    },
    {
      durations: [{ hours: 1 }, { hours: -1 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 0 },
    },
    {
      durations: [{ hours: 12 }, { hours: 12 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 0, days: 1, weeks: 0 },
    },
    {
      durations: [{ hours: 12 }, { hours: 24 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 12, days: 1, weeks: 0 },
    },
    {
      durations: [{ days: 1 }, { days: 1 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 0, days: 2, weeks: 0 },
    },
    {
      durations: [{ days: 1 }, { days: -1 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 0 },
    },
    {
      durations: [{ days: 7 }, { days: 7 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 2 },
    },
    {
      durations: [{ days: 7 }, { days: 10 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 0, days: 3, weeks: 2 },
    },
    {
      durations: [{ weeks: 1 }, { weeks: 1 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 2 },
    },
    {
      durations: [{ weeks: 1 }, { weeks: -1 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 0 },
    },
    {
      durations: [{ weeks: 26 }, { weeks: 27 }],
      expectedResult: { seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 53 },
    },
    {
      durations: [
        { seconds: 20, minutes: 33, hours: 0, days: 6, weeks: 23 },
        { seconds: 56, minutes: 12, hours: 0, days: 0, weeks: 9 },
      ],
      expectedResult: {
        seconds: 16,
        minutes: 46,
        hours: 0,
        days: 6,
        weeks: 32,
      },
    },
  ])('can cumulate durations', ({ durations, expectedResult }) => {
    const actualResult = cumulateDurations(durations)

    expect(actualResult).toEqual(expectedResult)
  })
})
