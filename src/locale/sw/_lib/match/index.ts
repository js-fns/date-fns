import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /\d+/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(k|b)/i,
  abbreviated: /^(k\.?\s?k\.?|k\.?\s?k\.?\s?e\.?|b\.?\s?d\.?|k\.?\s?e\.?)/i,
  wide: /^((Kabla ya|Baada ya) Kristo)/i,
}
const parseEraPatterns = {
  any: [/^k/i, /^(b|k)/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^(robo ya) [1234]/i,
  wide: /^(robo ya) [1234]/i,
}
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mac|apr|mei|jun|jul|ago|sep|okt|nov|des)/i,
  wide: /^(januari|februari|machi|aprili|mei|juni|julai|agosti|septemba|oktoba|novemba|decemba)/i,
}
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ] as const,
  any: [
    /^ja/i,
    /^f/i,
    /^mac/i,
    /^ap/i,
    /^mei/i,
    /^jun/i,
    /^jul/i,
    /^ag/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(jumapili|jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi)/i,
  abbreviated: /^(jumapili|jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi)/i,
  wide: /^(jumapili|jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi)/i,
}
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i] as const,
  any: [
    /^jumap/i,
    /^jumatat/i,
    /^juman/i,
    /^jumatan/i,
    /^al/i,
    /^ij/i,
    /^jumam/i,
  ] as const,
}

const matchDayPeriodPatterns = {
  narrow: /^(a|p|usiku|mchana|alfajiri|mchana|jioni|usiku)/i,
  any: /^([ap]\.?\s?m\.?|usiku|(saa sita za usiku)|mchana|adhuhur|(saa sita za mchana)|alfajiri|mchana|jioni|usiku)/i,
}
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^(usiku|saa sita za usiku)/i,
    noon: /^(mchana|adhuhur|saa sita za mchana)/i,
    morning: /alfajiri/i,
    afternoon: /mchana/i,
    evening: /jioni/i,
    night: /usiku/i,
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
