import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenValue =
  | string
  | {
      one: string
      other: string
    }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'chini ya sekunde',
    other: 'chini ya sekunde {{count}}',
  },

  xSeconds: {
    one: 'Sekunde 1',
    other: '{{count}} sekunde',
  },

  halfAMinute: 'nusu dakika',

  lessThanXMinutes: {
    one: 'chini ya dakika moja',
    other: 'chini ya dakika {{count}}',
  },

  xMinutes: {
    one: 'dakiki 1',
    other: 'dakiki {{count}}',
  },

  aboutXHours: {
    one: 'karibu saa 1',
    other: 'kama masaa {{count}}',
  },

  xHours: {
    one: 'saa 1',
    other: '{{count}} masaa',
  },

  xDays: {
    one: 'siku 1',
    other: 'siku {{count}}',
  },

  aboutXWeeks: {
    one: 'takriban wiki 1',
    other: 'takriban wiki {{count}}',
  },

  xWeeks: {
    one: 'wiki 1',
    other: 'wiki {{count}}',
  },

  aboutXMonths: {
    one: 'karibu mwezi 1',
    other: 'takriban miezi {{count}}',
  },

  xMonths: {
    one: 'mwezi 1',
    other: 'miezi {{count}}',
  },

  aboutXYears: {
    one: 'takriban mwaka 1',
    other: 'takriban miaka {{count}}',
  },

  xYears: {
    one: '1 mwaka',
    other: 'miaka {{count}}',
  },

  overXYears: {
    one: 'zaidi ya mwaka 1',
    other: 'zaidi ya miaka {{count}}',
  },

  almostXYears: {
    one: 'karibu mwaka 1',
    other: 'karibu miaka {{count}}',
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
      return 'katika ' + result
    } else {
      return result + ' iliyopita'
    }
  }

  return result
}

export default formatDistance
