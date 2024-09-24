import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenValue =
  | string
  | {
      one: string
      other: string
    }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'ከአንድ ሰከንድ ያነሰ',
    other: 'ከ {{count}} ሰከንድ ያነሰ',
  },

  xSeconds: {
    one: '1 ሰከንድ',
    other: '{{count}} ሰከንድ',
  },

  halfAMinute: 'ግማሽ ደቂቃ',

  lessThanXMinutes: {
    one: 'ከአንድ ደቂቃ ያነሰ',
    other: 'ከ {{count}} ደቂቃዎች ያነሰ',
  },

  xMinutes: {
    one: '1 ደቂቃ',
    other: '{{count}} ደቂቃዎች',
  },

  aboutXHours: {
    one: '1 ሰዓት ያህል',
    other: 'ወደ {{count}} ሰአታት ገደማ',
  },

  xHours: {
    one: '1 ሰዓት',
    other: '{{count}} ሰዓታት',
  },

  xDays: {
    one: '1 ቀን',
    other: '{{count}} ቀናት',
  },

  aboutXWeeks: {
    one: '1 ሳምንት ገደማ',
    other: 'ወደ {{count}} ሳምንታት',
  },

  xWeeks: {
    one: '1 ሳምንት',
    other: '{{count}} ሳምንታት',
  },

  aboutXMonths: {
    one: 'ወደ 1 ወር ገደማ',
    other: 'ወደ {{count}} ወር ገደማ',
  },

  xMonths: {
    one: '1 ወር',
    other: '{{count}} ወራት',
  },

  aboutXYears: {
    one: 'ወደ 1 ዓመት ገደማ',
    other: 'ወደ {{count}} ዓመት ገደማ',
  },

  xYears: {
    one: '1 ዓመት',
    other: '{{count}} አመታት',
  },

  overXYears: {
    one: 'ከ 1 ዓመት በላይ',
    other: 'ከ {{count}} ዓመት በላይ',
  },

  almostXYears: {
    one: 'ወደ 1 ዓመት ገደማ',
    other: 'ወደ {{count}} ዓመታት ገደማ',
  },
}

const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result

  const tokenValue = formatDistanceLocale[token]
  if (typeof tokenValue === 'string') {
    result = tokenValue
  } else if (count === 1) {
    result = tokenValue.one
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString())
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'በ ' + result
    } else {
      return result + ' በፊት'
    }
  }

  return result
}

export default formatDistance
