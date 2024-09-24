import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['ዓ', 'ም'] as const,
  abbreviated: ['ዓ/ዓ', 'ዓ/ም'] as const,
  wide: ['ዓመተ ዓለም', 'ዓመተ ምሕረት'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['ሩብ1', 'ሩብ2', 'ሩብ3', 'ሩብ4'] as const,
  wide: ['1ኛው ሩብ', '2ኛው ሩብ', '3ኛው ሩብ', '4ኛው ሩብ'] as const,
}

const monthValues = {
  narrow: ['ጃ', 'ፌ', 'ማ', 'ኤ', 'ሜ', 'ጁ', 'ጁ', 'ኦ', 'ሴ', 'ኦ', 'ኖ', 'ዲ'] as const,
  abbreviated: [
    'ጃንዩ',
    'ፌብሩ',
    'ማርች',
    'ኤፕሪ',
    'ሜይ',
    'ጁን',
    'ጁላይ',
    'ኦገስ',
    'ሴፕቴ',
    'ኦክቶ',
    'ኖቬም',
    'ዲሴም',
  ] as const,
  wide: [
    'ጃንዩወሪ',
    'ፌብሩወሪ',
    'ማርች',
    'ኤፕሪል',
    'ሜይ',
    'ጁን',
    'ጁላይ',
    'ኦገስት',
    'ሴፕቴምበር',
    'ኦክቶበር',
    'ኖቬምበር',
    'ዲሴምበር',
  ] as const,
}

const dayValues = {
  narrow: ['እ', 'ሰ', 'ሰ', 'ረ', 'ሐ', 'ሐ', 'ቅ'] as const,
  short: ['እ', 'ሰ', 'ሰ', 'ረ', 'ሐ', 'ሐ', 'ቅ'] as const,
  abbreviated: ['እሁድ', 'ሰኞ', 'ምክ', 'ዕሮ', 'ሐሙ', 'አር', 'ቅዳ'] as const,
  wide: ['እሁድ', 'ሰኞ', 'ምክሰኞ', 'ዕሮብ', 'ሐሙስ', 'አርብ', 'ቅዳሜ'] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'ጠ',
    pm: 'ከ',
    midnight: 'እኩለ ሌሊት',
    noon: 'ቀ',
    morning: 'ጥዋት',
    afternoon: 'ከሰዓት በኋላ',
    evening: 'ማታ',
    night: 'ሌሊት',
  },
  abbreviated: {
    am: 'ጥዋት',
    pm: 'ከሰዓት',
    midnight: 'እኩለ ሌሊት',
    noon: 'ቀትር',
    morning: 'ጥዋት1',
    afternoon: 'ከሰዓት በኋላ',
    evening: 'ማታ',
    night: 'ሌሊት',
  },
  wide: {
    am: 'ጥዋት',
    pm: 'ከሰዓት',
    midnight: 'እኩለ ሌሊት',
    noon: 'ቀትር',
    morning: 'ጥዋት1',
    afternoon: 'ከሰዓት በኋላ',
    evening: 'ማታ',
    night: 'ሌሊት',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'ጠ',
    pm: 'ከ',
    midnight: 'እኩለ ሌሊት',
    noon: 'ቀ',
    morning: 'ጥዋት1',
    afternoon: 'ከሰዓት1',
    evening: 'ማታ1',
    night: 'ሌሊት1',
  },
  abbreviated: {
    am: 'ጥዋት',
    pm: 'ከሰዓት',
    midnight: 'እኩለ ሌሊት',
    noon: 'ቀትር',
    morning: 'ጥዋት1',
    afternoon: 'ከሰዓት 7',
    evening: 'ማታ1',
    night: 'ሌሊት1',
  },
  wide: {
    am: 'ጥዋት',
    pm: 'ከሰዓት',
    midnight: 'እኩለ ሌሊት',
    noon: 'ቀትር',
    morning: 'ጥዋት1',
    afternoon: 'ከሰዓት 7 ሰዓት',
    evening: 'ማታ1',
    night: 'ሌሊት1',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  const number = Number(dirtyNumber)
  return number + 'ኛ'
}

const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => (quarter - 1) as Quarter,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
