import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenValue = string | { one: string; other: string }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'ບໍ່ເກີນ 1 ວິນາທີ',
    other: 'ບໍ່ເກີນ {{count}} ວິນາທີ',
  },

  xSeconds: {
    one: '1 ວີນາທີ',
    other: '{{count}} ວິນາທີ',
  },

  halfAMinute: 'ເຄິ່ງນາທີ',

  lessThanXMinutes: {
    one: 'ບໍ່ເກີນ 1 ນາທີ',
    other: 'ບໍ່ເກີນ {{count}} ນາທີ',
  },

  xMinutes: {
    one: '1 ນາທີ',
    other: '{{count}} ນາທີ',
  },

  aboutXHours: {
    one: 'ປະມານ 1 ຊົ່ວໂມງ',
    other: 'ປະມານ {{count}} ຊົ່ວໂມງ',
  },

  xHours: {
    one: '1 ຊົ່ວໂມງ',
    other: '{{count}} ຊົ່ວໂມງ',
  },

  xDays: {
    one: '1 ມື້',
    other: '{{count}} ມື້',
  },

  aboutXWeeks: {
    one: 'ປະມານ 1 ອາທິດ',
    other: 'ປະມານ {{count}} ອາທິດ',
  },

  xWeeks: {
    one: '1 ອາທິດ',
    other: '{{count}} ອາທິດ',
  },

  aboutXMonths: {
    one: 'ປະມານ 1 ເດືອນ',
    other: 'ປະມານ {{count}} ເດືອນ',
  },

  xMonths: {
    one: '1 ເດືອນ',
    other: '{{count}} ເດືອນ',
  },

  aboutXYears: {
    one: 'ປະມານ 1 ປີ',
    other: 'ປະມານ {{count}} ປີ',
  },

  xYears: {
    one: '1 ປີ',
    other: '{{count}} ປີ',
  },

  almostXYears: {
    one: 'ເກືອບ 1 ປີ',
    other: 'ເກືອບ {{count}} ປີ',
  },

  overXYears: {
    one: '1 ປີກວ່າ',
    other: '{{count}} ປີກວ່າ',
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
    result = tokenValue.other.replace('{{count}}', String(count))
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      if (token === 'halfAMinute') {
        return 'ໃນ' + result
      } else {
        return 'ໃນ ' + result
      }
    } else {
      return result + 'ຜ່ານມາ'
    }
  }

  return result
}

export default formatDistance
