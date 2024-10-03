import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn'
import { Quarter } from '../../../../types'

const matchOrdinalNumberPattern = /^\d+/i
const parseOrdinalNumberPattern = /^\d+/i

const matchEraPatterns = {
  narrow: /^([bB]|[aA]|ຄສ)/i,
  abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\sd\.?|c\.?\s?e\.?|ຄ\.?ສ\.?)/i,
  wide: /^(ກ່ອນຄຣິດຕະການ|ຄຣິດຕະສັກກະຫຼາດ|ຄຣິດຕະການ)/i,
}

const parseEraPatterns = {
  any: [/^[bB]/i, /^(^[aA]|ຄ\.?ສ\.?|ຄຣິດຕະການ|ຄຣິດຕະສັກກະຫຼາດ)/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^ໄຕມາດ(ທີ)? ?[1234]/i,
}

const parseQuarterPatterns = {
  any: [/(1|ທຳອິດ|ໜຶ່ງ)/i, /(2|ສອງ)/, /(3|ສາມ)/, /(4|ສີ່)/] as const,
}

const matchMonthPatterns = {
  narrow: /^(ມ\.?ກ\.?|ກ\.?ພ\.?|ມີ\.?ນ\.?|ມ\.?ສ\.?|ພ\.?ພ\.?|ມິ\.?ນ\.?|ກ\.?ກ\.?|ສ\.?ຫ\.?|ກ\.?ຍ\.?|ຕ\.?ລ\.?|ພ\.?ຈ\.?|ທ\.?ວ\.?)/i,
  abbreviated: /^(ມ\.?ກ\.?|ກ\.?ພ\.?|ມີ\.?ນ\.?|ມ\.?ສ\.?|ພ\.?ພ\.?|ມິ\.?ນ\.?|ກ\.?ກ\.?|ສ\.?ຫ\.?|ກ\.?ຍ\.?|ຕ\.?ລ\.?|ພ\.?ຈ\.?|ທ\.?ວ\.?)/i,
  wide: /^(ມັງກອນ|ກຸມພາ|ມີນາ|ເມສາ|ພຶດສະພາ|ມິຖຸນາ|ກໍລະກົດ|ສິງຫາ|ກັນຍາ|ຕຸລາ|ພະຈິກ|ທັນວາ)/i,
}

const parseMonthPatterns = {
  wide: [
    /^ມັງກອນ/i,
    /^ກຸມພາ/i,
    /^ມີນາ/i,
    /^ເມສາ/i,
    /^ພຶດສະພາ/i,
    /^ມີຖຸນາ/i,
    /^ກໍລະກົດ/i,
    /^ສິງຫາ/i,
    /^ກັນຍາ/i,
    /^ຕຸລາ/i,
    /^ພະຈຶກ/i,
    /^ທັນວາ/i,
  ] as const,
  any: [
    /^ມ\.?ກ\.?/i,
    /^ກ\.?ພ\.?/i,
    /^ມີ\.?ນ\.?/i,
    /^ມ\.?ສ\.?/i,
    /^ພ\.?ພ\.?/i,
    /^ມິ\.?ນ\.?/i,
    /^ກ\.?ກ\.?/i,
    /^ສ\.?ຫ\.?/i,
    /^ກ\.?ຍ\.?/i,
    /^ຕ\.?ລ\.?/i,
    /^ພ\.?ຈ\.?/i,
    /^ທ\.?ວ\.?/i,
  ] as const,
}

const matchDayPatterns = {
  narraw: /^(ທ\.?|ຈ\.?|ຄ\.?|ພ\.?\|ພ\.?ຫ\.?|ສຸ\.?|ສ\.?)/i,
  short: /^(ທ\.?|ຈ\.?|ຄ\.?|ພ\.?\|ພ\.?ຫ\.?|ສຸ\.?|ສ\.?)/i,
  abbreviated: /^(ອ\.?ທ\.?|ຈ\.?|ອ\.?ຄ\.?|ພ\.?\|ພ\.?ຫ\.?|ສຸ\.?|ສ\.?)/i,
  wide: /^(ອາທິດ|ຈັນ|ອັງຄານ|ພຸດ|ພະຫັດ|ສຸກ|ເສົາ)/i,
}

const parseDayPatterns = {
  wide: [
    /^ອາທິດ/i,
    /^ຈັນ/i,
    /^ອັງຄານ/i,
    /^ພຸດ/i,
    /^ພະຫັດ/i,
    /^ສຸກ/i,
    /^ເສົາ/i,
  ] as const,
  any: [
    /^ອ\.?ທ\.?/i,
    /^ຈ\.?/i,
    /^ອ\.?ຄ\.?/i,
    /^ພ\.?/i,
    /^ພ\.?ຫ\.?/i,
    /^ສຸ\.?/i,
    /^ສ\.?/i,
  ] as const,
}

const matchDayPeriodPatterns = {
  any: /^(ກ່ອນທ່ຽງ|ຫຼັງທ່ຽງ|ທ່ຽງຄືນ|ທ່ຽງ|(ຕອນ.*?)?.*(ທ່ຽງ|ເຊົ້າ|ບ່າຍ|ແລງ|ກາງຄືນ))/i,
}

const parseDayPeriodPatterns = {
  any: {
    am: /^ກ່ອນທ່ຽງ/i,
    pm: /^ຫຼັງທ່ຽງ/i,
    midnight: /^ທ່ຽງຄືນ/i,
    noon: /^ທ່ຽງ/i,
    morning: /^ເຊົ້າ/i,
    afternoon: /^ບ່າຍ/i,
    evening: /^ແລງ/i,
    night: /^ກາງຄືນ/i,
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
