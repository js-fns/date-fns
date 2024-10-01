import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['B', 'A'] as const,
  abbreviated: ['BC', 'AD'] as const,
  wide: ['Before Christ', 'Anno Domini'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'] as const,
  wide: [
    'Unang sangkapat',
    'Ikalawang sangkapat',
    'Ikatlong sangkapat',
    'Ikaapat sangkapat',
  ] as const,
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'] as const,
  abbreviated: [
    'Enero',
    'Peb',
    'Marso',
    'Abr',
    'Mayo',
    'Hun',
    'Hul',
    'Agosto',
    'Set',
    'Okt',
    'Nob',
    'Dis',
  ] as const,
  wide: [
    'Enero',
    'Pebrero',
    'Marso',
    'Abril',
    'Mayo',
    'Hunyo',
    'Hulyo',
    'Agosto',
    'Setyembre',
    'Oktubre',
    'Nobyembre',
    'Disyembre',
  ] as const,
}

const dayValues = {
  narrow: ['L', 'L', 'M', 'M', 'H', 'B', 'S'] as const,
  short: ['Li', 'Lu', 'Ma', 'Mi', 'Hu', 'Bi', 'Sa'] as const,
  abbreviated: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'] as const,
  wide: [
    'Linggo',
    'Lunes',
    'Martes',
    'Miyerkules',
    'Huwebes',
    'Biyernes',
    'Sabado',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'umaga',
    afternoon: 'hapon',
    evening: 'gabi',
    night: 'gabi',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'hatinggabi',
    noon: 'tanghali',
    morning: 'umaga',
    afternoon: 'hapon',
    evening: 'gabi',
    night: 'gabi',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'hatinggabi',
    noon: 'tanghali',
    morning: 'umaga',
    afternoon: 'hapon',
    evening: 'gabi',
    night: 'gabi',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'sa umaga',
    afternoon: 'sa hapon',
    evening: 'sa gabi',
    night: 'sa gabi',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'sa umaga',
    afternoon: 'sa hapon',
    evening: 'sa gabi',
    night: 'sa gabi',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'sa umaga',
    afternoon: 'sa hapon',
    evening: 'sa gabi',
    night: 'sa gabi',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  const number = Number(dirtyNumber)

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  // const rem100 = number % 100
  // if (rem100 > 20 || rem100 < 10) {
  //   switch (rem100 % 10) {
  //     case 1:
  //       return number + 'st'
  //     case 2:
  //       return number + 'nd'
  //     case 3:
  //       return number + 'rd'
  //   }
  // }

  return 'ika-' + number
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
