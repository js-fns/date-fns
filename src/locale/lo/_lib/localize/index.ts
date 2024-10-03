import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['B', 'ຄສ'] as const,
  abbreviated: ['BC', 'ຄ.ສ.'] as const,
  wide: ['ປີກ່ອນຄຣິດຕະສັກກະຫຼາດ', 'ຄຣິດຕະສັກກະຫຼາດ'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'] as const,
  wide: ['ໄຕມາດທີໜຶ່ງ', 'ໄຕມາດທີສອງ', 'ໄຕມາດທີສາມ', 'ໄຕມາດທີສີ່'] as const,
}

const dayValues = {
  narrow: ['ທ.', 'ຈ.', 'ຄ.', 'ພ.', 'ພ.ຫ.', 'ສຸ.', 'ສ.'] as const,
  short: ['ທ.', 'ຈ.', 'ຄ.', 'ພ.', 'ພ.ຫ.', 'ສຸ.', 'ສ.'] as const,
  abbreviated: ['ອ.ທ.', 'ຈ.', 'ອ.ຄ.', 'ພ.', 'ພ.ຫ.', 'ສຸ.', 'ສ.'] as const,
  wide: ['ອາທິດ', 'ຈັນ', 'ອັງຄານ', 'ພຸດ', 'ພະຫັດ', 'ສຸກ', 'ເສົາ'] as const,
}

const monthValues = {
  narrow: [
    'ມ.ກ.',
    'ກ.ພ.',
    'ມີ.ນ.',
    'ມ.ສ.',
    'ພ.ພ.',
    'ມິ.ນ.',
    'ກ.ກ.',
    'ສ.ຫ.',
    'ກ.ຍ.',
    'ຕ.ລ.',
    'ພ.ຈ.',
    'ທ.ວ.',
  ] as const,
  abbreviated: [
    'ມ.ກ.',
    'ກ.ພ.',
    'ມີ.ນ',
    'ມ.ສ.',
    'ພ.ພ.',
    'ມິ.ນ.',
    'ກ.ກ.',
    'ສ.ຫ.',
    'ກ.ຍ.',
    'ຕ.ລ.',
    'ພ.ຈ.',
    'ທ.ວ.',
  ] as const,
  wide: [
    'ມັງກອນ',
    'ກຸມພາ',
    'ມີນາ',
    'ເມສາ',
    'ພຶດສະພາ',
    'ມິຖຸນາ',
    'ກໍລະກົດ',
    'ສິງຫາ',
    'ກັນຍາ',
    'ຕຸລາ',
    'ພະຈິກ',
    'ທັນວາ',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'ກ່ອນທ່ຽງ',
    pm: 'ຫຼັງທ່ຽງ',
    midnight: 'ທ່ຽງຄືນ',
    noon: 'ທ່ຽງ',
    morning: 'ເຊົ້າ',
    afternoon: 'ບ່າຍ',
    evening: 'ແລງ',
    night: 'ກາງຄືນ',
  },
  abbreviated: {
    am: 'ກ່ອນທ່ຽງ',
    pm: 'ຫຼັງທ່ຽງ',
    midnight: 'ທ່ຽງຄືນ',
    noon: 'ທ່ຽງ',
    morning: 'ເຊົ້າ',
    afternoon: 'ບ່າຍ',
    evening: 'ແລງ',
    night: 'ກາງຄືນ',
  },
  wide: {
    am: 'ກ່ອນທ່ຽງ',
    pm: 'ຫຼັງທ່ຽງ',
    midnight: 'ທ່ຽງຄືນ',
    noon: 'ທ່ຽງ',
    morning: 'ເຊົ້າ',
    afternoon: 'ບ່າຍ',
    evening: 'ແລງ',
    night: 'ກາງຄືນ',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'ກ່ອນທ່ຽງ',
    pm: 'ຫຼັງທ່ຽງ',
    midnight: 'ທ່ຽງຄືນ',
    noon: 'ທ່ຽງ',
    morning: 'ຕອນເຊົ້າ',
    afternoon: 'ຕອນບ່າຍ',
    evening: 'ຕອນແລງ',
    night: 'ຕອນກາງຄືນ',
  },
  abbreviated: {
    am: 'ກ່ອນທ່ຽງ',
    pm: 'ຫຼັງທ່ຽງ',
    midnight: 'ທ່ຽງຄືນ',
    noon: 'ທ່ຽງ',
    morning: 'ຕອນເຊົ້າ',
    afternoon: 'ຕອນບ່າຍ',
    evening: 'ຕອນແລງ',
    night: 'ຕອນກາງຄືນ',
  },
  wide: {
    am: 'ກ່ອນທ່ຽງ',
    pm: 'ຫຼັງທ່ຽງ',
    midnight: 'ທ່ຽງຄືນ',
    noon: 'ທ່ຽງ',
    morning: 'ຕອນເຊົ້າ',
    afternoon: 'ຕອນບ່າຍ',
    evening: 'ຕອນແລງ',
    night: 'ຕອນກາງຄືນ',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  return String(dirtyNumber)
}

const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({ values: eraValues, defaultWidth: 'wide' }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => (quarter - 1) as Quarter,
  }),

  month: buildLocalizeFn({ values: monthValues, defaultWidth: 'wide' }),

  day: buildLocalizeFn({ values: dayValues, defaultWidth: 'wide' }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
