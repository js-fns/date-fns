import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^(\d+)/;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(ق|ع)/g,
  abbreviated: /^(ق.م|ع)/g,
  wide: /^(قبل مسیح|عیسوی)/i,
};

const parseEraPatterns = {
  any: [/^ق/i, /^ع/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^س[1234]/i,
  wide: /^(پہلی|دوسری|تیسری|چوتھی) سہ ماہی/,
};

const parseQuarterPatterns = {
  wide: [
    /پہلی سہ ماہی/,
    /دوسری سہ ماہی/,
    /تیسری سہ ماہی/,
    /چوتھی سہ ماہی/,
  ] as const,
  abbreviation: ["/^1سہ/", "/^2سہ/", "/^3سہ/", "/^4سہ/"] as const,
  any: [/1/, /2/, /3/, /4/] as const,
};

const matchMonthPatterns = {
  narrow: /^(ج|ف|م|ا|م|ج|ج|ا|س|ا|ن|د)/i,
  abbreviated: /^(جنو|فرو|مارچ|اپر|مئ|جون|جولا|اگست|ستم|اکت|نوم|دسم)/i,
  wide: /^(جنوری|فروری|مارچ|اپریل|مئی|جون|جولائی|اگست|ستمبر|اکتوبر|نومبر|دسمبر)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^ج/i,
    /^ف/i,
    /^م/i,
    /^ا/i,
    /^م/i,
    /^ج/i,
    /^ج/i,
    /^ا/i,
    /^س/i,
    /^ا/i,
    /^ن/i,
    /^د/i,
  ] as const,
  any: [
    /^جنو/i,
    /^فرو/i,
    /^مارچ/i,
    /^اپر/i,
    /^مئ/i,
    /^جون/i,
    /^جولا/i,
    /^اگست/i,
    /^ستم/i,
    /^اکت/i,
    /^نوم/i,
    /^دسم/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^(ا|پ|م|ب|ج|ہ)/i,
  short: /^(اتوار|پیر|منگل|بدھ|جمعرات|جمعہ|ہفتہ)/i,
  abbreviated: /^(اتوار|پیر|منگل|بدھ|جمعرات|جمعہ|ہفتہ)/i,
  wide: /^(اتوار|پیر|منگل|بدھ|جمعرات|جمعہ|ہفتہ)/i,
};
const parseDayPatterns = {
  narrow: [/^ا/, /^پ/, /^م/, /^ب/, /^ج/, /^ج/, /^ہ/] as const,
  any: [/اتوار/, /پیر/, /منگل/, /بدھ/, /جمعرات/, /جمعہ/, /ہفتہ/] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(شام|صبح|ص|ش|ز|د|ر|آر)/i,
  any: /^(شام|صبح|ص|ش|زوال|دوپہر|رات|آدھی رات)/,
};

const parseDayPeriodPatterns = {
  any: {
    am: /^(ص)/i,
    pm: /^(ش)/i,
    morning: /^(صبح)/,
    noon: /^(زوال|ز)/,
    afternoon: /^(دوپہر|د)/,
    evening: /^(شام)/,
    night: /^(رات|ر)/,
    midnight: /^(آدھی رات|آر)/,
  },
};

export const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => (index + 1) as Quarter,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};
