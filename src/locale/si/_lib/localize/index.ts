import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

// Ref: https://www.unicode.org/cldr/cldr-aux/charts/32/summary/si.html

const eraValues = {
  narrow: ['ක්‍රි.පූ.', 'ක්‍රි.ව.'] as const,
  abbreviated: ['ක්‍රි.පූ.', 'ක්‍රි.ව.'] as const,
  wide: ['ක්‍රිස්තු පූර්ව', 'ක්‍රිස්තු වර්ෂ'] as const,
};

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['කාර්:1', 'කාර්:2', 'කාර්:3', 'කාර්:4'] as const,
  wide: [
    '1 වන කාර්තුව',
    '2 වන කාර්තුව',
    '3 වන කාර්තුව',
    '4 වන කාර්තුව',
  ] as const,
};

const monthValues = {
  narrow: [ 'ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ', 'නෙ', 'දෙ'] as const,
  abbreviated: [
    'ජන',
    'පෙබ',
    'මාර්තු',
    'අප්‍රේල්',
    'මැයි',
    'ජූනි',
    'ජූලි',
    'අගෝ',
    'සැප්',
    'ඔක්',
    'නොවැ',
    'දෙසැ',
  ] as const,
  wide: [
    'ජනවාරි',
    'පෙබරවාරි',
    'මාර්තු',
    'අප්‍රේල්',
    'මැයි',
    'ජූනි',
    'ජූලි',
    'අගෝස්තු',
    'සැප්තැම්බර්',
    'ඔක්තෝබර්',
    'නොවැම්බර්',
    'දෙසැම්බර්',
  ] as const,
};

const dayValues = {
  narrow: ['ඉ', 'ස', 'අ', 'බ', 'බ්‍ර', 'සි', 'සෙ'] as const,
  short: ['ඉරි', 'සඳු', 'අඟ', 'බදා', 'බ්‍රහ', 'සිකු', 'සෙන'] as const,
  abbreviated: [
    'ඉරිදා',
    'සඳුදා',
    'අඟහ',
    'බදාදා',
    'බ්‍රහස්',
    'සිකු',
    'සෙන',
  ] as const,
  wide: [
    'ඉරිදා',
    'සඳුදා',
    'අඟහරුවාදා',
    'බදාදා',
    'බ්‍රහස්පතින්දා',
    'සිකුරාදා',
    'සෙනසුරාදා',
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: 'පෙ',
    pm: 'ප',
    midnight: 'මැ',
    noon: 'ම',
    morning: 'උදෑසන',
    afternoon: 'දහවල්',
    evening: 'හවස',
    night: 'රා',
  },
  abbreviated: {
    am: 'පෙ.ව.',
    pm: 'ප.ව.',
    midnight: 'මැදියම',
    noon: 'මධ්‍යාහ්නය',
    morning: 'උදෑසන',
    afternoon: 'දහවල්',
    evening: 'හවස',
    night: 'රාත්‍රී',
  },
  wide: {
    am: 'පෙරවරු',
    pm: 'පස්වරු',
    midnight: 'මැදියම',
    noon: 'මධ්‍යාහ්නය',
    morning: 'උදෑසන',
    afternoon: 'දහවල්',
    evening: 'හවස',
    night: 'රාත්‍රී',
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: 'පෙ',
    pm: 'ප',
    midnight: 'මැ',
    noon: 'ම',
    morning: 'උ',
    afternoon: 'ද',
    evening: 'හ',
    night: 'රා',
  },
  abbreviated: {
    am: 'පෙ.ව.',
    pm: 'ප.ව.',
    midnight: 'මැදියම',
    noon: 'මධ්‍යාහ්නය',
    morning: 'උදෑසන',
    afternoon: 'දහවල්',
    evening: 'හවස',
    night: 'රාත්‍රී',
  },
  wide: {
    am: 'පෙ.ව.',
    pm: 'ප.ව.',
    midnight: 'මැදියම',
    noon: 'මධ්‍යාහ්නය',
    morning: 'උදෑසන',
    afternoon: 'දවල්',
    evening: 'හවස',
    night: 'රාත්‍රී',
  },
}

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + 'වැනි'
};

export const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => quarter - 1,
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
};
