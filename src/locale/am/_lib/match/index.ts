import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /^(\d+)(ኛው)?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(ዓ|ም)/i,
  abbreviated: /^(ዓ\/ዓ|ዓ\/ም)/i,
  wide: /^(ዓመተ ዓለም|ዓመተ ምሕረት)/i,
}
const parseEraPatterns = {
  any: [/ዓ/i, /ም/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](ኛው)? ሩብ/i,
}
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[ጃፌማኤሜጁጁኦሴኦኖዲ]/i,
  abbreviated: /^(ጃንዩ|ፌብሩ|ማርች|ኤፕሪ|ሜይ|ጁን|ጁላይ|ኦገስ|ሴፕቴ|ኦክቶ|ኖቬም|ዲሴም)/i,
  wide: /^(ጃንዩወሪ|ፌብሩወሪ|ማርች|ኤፕሪል|ሜይ|ጁን|ጁላይ|ኦገስት|ሴፕቴምበር|ኦክቶበር|ኖቬምበር|ዲሴምበር)/i,
}
const parseMonthPatterns = {
  narrow: [
    /^ጃ/i,
    /^ፌ/i,
    /^ማ/i,
    /^ኤ/i,
    /^ሜ/i,
    /^ጁ/i,
    /^ጁ/i,
    /^ኦ/i,
    /^ሴ/i,
    /^ኦ/i,
    /^ኖ/i,
    /^ዲ/i,
  ] as const,
  any: [
    /^ጃንዩ/i,
    /^ፌብሩ/i,
    /^ማርች/i,
    /^ኤፕሪ/i,
    /^ሜይ/i,
    /^ጁን/i,
    /^ጁላይ/i,
    /^ኦገስ/i,
    /^ሴፕቴ/i,
    /^ኦክቶ/i,
    /^ኖቬም/i,
    /^ዲሴም/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^[እሰሰረሐሐቅ]/i,
  short: /^(እ|ሰ|ሰ|ረ|ሐ|ሐ|ቅ)/i,
  abbreviated: /^(እሁድ|ሰኞ|ምክ|ዕሮ|ሐሙ|አር|ቅዳ)/i,
  wide: /^(እሁድ|ሰኞ|ምክሰኞ|ዕሮብ|ሐሙስ|አርብ|ቅዳሜ)/i,
}
const parseDayPatterns = {
  narrow: [/^እ/i, /^ሰ/i, /^ሰ/i, /^ረ/i, /^ሐ/i, /^ሐ/i, /^ቅ/i] as const,
  any: [/^እ/i, /^ሰ/i, /^ሰ/i, /^ረ/i, /^ሐ/i, /^ዓ/i, /^ቅ/i] as const,
}

const matchDayPeriodPatterns = {
  narrow: /^(ጠ|ከ|እኩለ ሌሊት|ቀ|ጥዋት|ከሰዓት በኋላ|ማታ|ሌሊት)/i,
  any: /^(ጠ|ከ|ጥዋት|ከሰዓት|እኩለ ሌሊት|ቀትር|ጥዋት|ከሰዓት በኋላ|ማታ|ሌሊት)/i,
}
const parseDayPeriodPatterns = {
  any: {
    am: /^ጠ/i,
    pm: /^ከ/i,
    midnight: /^እኩለ ሌሊት/i,
    noon: /^ቀ/i,
    morning: /ጥዋት/i,
    afternoon: /ከሰዓት በኋላ/i,
    evening: /ማታ/i,
    night: /ሌሊት/i,
  },
}

const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any',
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: (index) => (index + 1) as Quarter,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any',
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any',
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any',
  }),
}

export default match
