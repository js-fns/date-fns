import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type Tense = {
  default: string
  in: string
  ago: string
}

type Plural = {
  one: Tense
  other: Tense
}

function isPluralType(val: Plural | Tense): val is Plural {
  return (val as Plural).one !== undefined
}

type FormatDistanceTokenValue = Plural | Tense

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: {
      default: 'තත්පරයකට වඩා අඩුය',
      in: 'තත්පරයකින්',
      ago: 'තත්පරයකට පෙර',
    },
    other: {
      default: 'තත්පර {{count}} වඩා අඩුය',
      in: 'තත්පර {{count}}කින්',
      ago: 'තත්පර {{count}}කට පෙර',
    },
  },

  xSeconds: {
    one: {
      default: 'තත්පර 1',
      in: 'තත්පරයකින්',
      ago: 'තත්පරයකට පෙර',
    },
    other: {
      default: 'තත්පර {{count}}',
      in: 'තත්පර {{count}}කින්',
      ago: 'තත්පර {{count}}කට පෙර',
    },
  },

  halfAMinute: {
    default: 'මිනිත්තු භාගයක්',
    in: 'මිනිත්තු භාගයකින්',
    ago: 'මිනිත්තු භාගයකට පෙර',
  },

  lessThanXMinutes: {
    one: {
      default: 'මිනිත්තුවකට වඩා අඩුය',
      in: 'මිනිත්තුවක් ඇතුළත',
      ago: 'මිනිත්තුවකට පෙර',
    },
    other: {
      default: 'මිනිත්තු {{count}} වඩා අඩුය',
      in: 'මිනිත්තු {{count}}ක් ඇතුළත',
      ago: 'මිනිත්තු {{count}}කට පෙර',
    },
  },

  xMinutes: {
    one: {
      default: 'මිනිත්තු 1',
      in: 'මිනිත්තුවකින්',
      ago: 'මිනිත්තුවකට පෙර',
    },
    other: {
      default: 'මිනිත්තු {{count}}',
      in: 'මිනිත්තු {{count}}කින්',
      ago: '{{count}}කට පෙර',
    },
  },

  aboutXHours: {
    one: {
      default: 'පැයක් පමණ',
      in: 'පැයකින් පමණ',
      ago: 'පැයකට පමණ පෙර',
    },
    other: {
      default: 'පැය {{count}} පමණ',
      in: 'පැය {{count}}කින් පමණ',
      ago: 'පැය {{count}}කට පමණ පෙර',
    },
  },

  xHours: {
    one: {
      default: 'පැය 1',
      in: 'පැයකින්',
      ago: 'පැයකට පෙර',
    },
    other: {
      default: 'පැය {{count}}',
      in: 'පැය {{count}}කින්',
      ago: 'පැය {{count}}කට පෙර',
    },
  },

  xDays: {
    one: {
      default: 'දින 1',
      in: 'දිනකින්',
      ago: 'දිනකට පෙර',
    },
    other: {
      default: 'දින {{count}}',
      in: 'දින {{count}}කින්',
      ago: 'දින {{count}}කට පෙර',
    },
  },

  aboutXWeeks: {
    one: {
      default: 'සතියක් පමණ',
      in: 'සතියකින් පමණ',
      ago: 'සතියකට පමණ පෙර',
    },
    other: {
      default: 'සති {{count}} පමණ',
      in: 'සති {{count}}කින් පමණ',
      ago: 'සති {{count}}කට පමණ පෙර',
    },
  },

  xWeeks: {
    one: {
      default: 'සති 1',
      in: 'සතියකින්',
      ago: 'සතියකට පෙර',
    },
    other: {
      default: 'සති {{count}}',
      in: 'සති {{count}}කින්',
      ago: 'සති {{count}}කට පෙර',
    },
  },

  aboutXMonths: {
    one: {
      default: 'මාසයක් පමණ',
      in: 'මාසයකින් පමණ',
      ago: 'මාසකට පමණ පෙර',
    },
    other: {
      default: 'මාස {{count}} පමණ',
      in: 'මාස {{count}}කින් පමණ',
      ago: 'මාස {{count}}කට පමණ පෙර',
    },
  },

  xMonths: {
    one: {
      default: 'මාස 1',
      in: 'මාසයකින්',
      ago: 'මාසයකට පෙර',
    },
    other: {
      default: 'මාස {{count}}',
      in: 'මාස {{count}}කින්',
      ago: 'මාස {{count}}කට පෙර',
    },
  },

  aboutXYears: {
    one: {
      default: 'වසරක් පමණ',
      in: 'වසරකින් පමණ',
      ago: 'වසරකට පමණ පෙර',
    },
    other: {
      default: 'වසර {{count}} පමණ',
      in: 'වසර {{count}}කින් පමණ',
      ago: 'වසර {{count}}කට පමණ පෙර',
    },
  },

  xYears: {
    one: {
      default: 'වසර 1',
      in: 'වසරකින්',
      ago: 'වසරකට පෙර',
    },
    other: {
      default: 'වසර {{count}}',
      in: 'වසර {{count}}කින්',
      ago: 'වසර {{count}}කට පෙර',
    },
  },

  overXYears: {
    one: {
      default: 'වසරකට වඩා',
      in: 'වසරකින්',
      ago: 'වසරකට පෙර',
    },
    other: {
      default: 'වසර {{count}}කට වඩා',
      in: 'වසර {{count}}කින්',
      ago: 'වසර {{count}}කට පෙර',
    },
  },

  almostXYears: {
    one: {
      default: 'වසරකට ආසන්න කාලයක්',
      in: 'වසරකට ආසන්න කාලයකින්',
      ago: 'වසරකට ආසන්න කාලයකට පෙර',
    },
    other: {
      default: 'වසර {{count}}කට ආසන්න කාලයක්',
      in: 'වසර {{count}}කට ආසන්න කාලයකින්',
      ago: 'වසර {{count}}කට ආසන්න කාලයකට පෙර',
    },
  },
}

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  const tense = options?.addSuffix
    ? options.comparison && options.comparison > 0
      ? 'in'
      : 'ago'
    : 'default'

  const tokenValue = formatDistanceLocale[token]

  if (!isPluralType(tokenValue)) return tokenValue[tense]

  if (count === 1) {
    return tokenValue.one[tense]
  } else {
    return tokenValue.other[tense].replace('{{count}}', String(count))
  }
}

