import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(bs|ss)/i,
  abbreviated: /^(b\.?s\.?|s\.?s\.?)/i,
  wide: /^(bikram sambat|shaka samvat)/i,
}
const parseEraPatterns = {
  any: [/^bs/i, /^ss/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
}
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[bjaskmpfc]/i,
  abbreviated: /^(bai|jes|ash|shr|bha|ashw|kar|mang|pou|mag|fal|cha)/i,
  wide: /^(baisakh|jestha|ashadh|shrawan|bhadra|ashwin|kartik|mangsir|poush|magh|falgun|chaitra)/i,
}
const parseMonthPatterns = {
  narrow: [
    /^b/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^b/i,
    /^a/i,
    /^k/i,
    /^m/i,
    /^p/i,
    /^m/i,
    /^f/i,
    /^c/i,
  ] as const,
  any: [
    /^ba/i,
    /^j/i,
    /^asha/i,
    /^s/i,
    /^bh/i,
    /^ashw/i,
    /^k/i,
    /^man/i,
    /^p/i,
    /^mag/i,
    /^f/i,
    /^c/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
}
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i] as const,
  any: [/^su/i, /^mo/i, /^tu/i, /^w/i, /^th/i, /^fr/i, /^sa/i] as const,
}

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
}

const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^n/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
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
