import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['K', 'B'] as const,
  abbreviated: ['KK', 'BK'] as const,
  wide: ['Kabla ya Kristo', 'Baada ya Kristo'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Robo ya 1', 'Robo ya 2', 'Robo ya 3', 'Robo ya 4'] as const,
  wide: ['Robo ya 1', 'Robo ya 2', 'Robo ya 3', 'Robo ya 4'] as const,
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'] as const,
  abbreviated: [
    'Jan',
    'Feb',
    'Mac',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ] as const,
  wide: [
    'Januari',
    'Februari',
    'Machi',
    'Aprili',
    'Mei',
    'Juni',
    'Julai',
    'Agosti',
    'Septemba',
    'Oktoba',
    'Novemba',
    'Desemba',
  ] as const,
}

const dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as const,
  short: [
    'Jumapili',
    'Jumatatu',
    'Jumanne',
    'Jumatano',
    'Alhamisi',
    'Ijumaa',
    'Jumamosi',
  ] as const,
  abbreviated: [
    'Jumapili',
    'Jumatatu',
    'Jumanne',
    'Jumatano',
    'Alhamisi',
    'Ijumaa',
    'Jumamosi',
  ] as const,
  wide: [
    'Jumapili',
    'Jumatatu',
    'Jumanne',
    'Jumatano',
    'Alhamisi',
    'Ijumaa',
    'Jumamosi',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'usiku',
    noon: 'mchana',
    morning: 'alfajiri',
    afternoon: 'mchana',
    evening: 'jioni',
    night: 'usiku',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'saa sita za usiku',
    noon: 'adhuhuri',
    morning: 'alfajiri',
    afternoon: 'alasiri',
    evening: 'jioni',
    night: 'usiku',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'saa sita za usiku',
    noon: 'saa sita za mchana',
    morning: 'alfajiri',
    afternoon: 'mchana',
    evening: 'jioni',
    night: 'usiku',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'usiku',
    noon: 'mchana',
    morning: 'alfajiri',
    afternoon: 'mchana',
    evening: 'jioni',
    night: 'usiku',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'saa sita za usiku',
    noon: 'adhuhuri',
    morning: 'alfajiri',
    afternoon: 'mchana',
    evening: 'jioni',
    night: 'usiku',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'saa sita za usiku',
    noon: 'saa sita za mchana',
    morning: 'alfajiri',
    afternoon: 'mchana',
    evening: 'jioni',
    night: 'usiku',
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
