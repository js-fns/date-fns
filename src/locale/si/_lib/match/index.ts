import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^(\d+)(වැනි|වන)?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(ක්‍රි.පූ.|ක්‍රි.ව.)/i,
  abbreviated: /^(ක්‍රි\.?\s?පූ\.?|ක්‍රි\.?\s?ව\.?)/i,
  wide: /^(ක්‍රිස්තු\s?පූර්ව|ක්‍රිස්තු\s?වර්[ෂශ])/i,
};
const parseEraPatterns = {
  any: [
    /^(ක්‍රි\.?\s?පූ\.?|ක්‍රිස්තු\s?පූර්ව)/i,
    /^(ක්‍රි\.?\s?ව\.?|ක්‍රිස්තු\s?වර්[ෂශ])/i,
  ] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^කාර්[:.]\s?[1234]/i,
  wide: /^[1234]\s?(වන|වැනි) කාර්තුව/i,
};
const parseQuarterPatterns = {
  abbreviated: [
    /^කාර්[:.]\s?1/i,
    /^කාර්[:.]\s?2/i,
    /^කාර්[:.]\s?3/i,
    /^කාර්[:.]\s?4/i,
  ] as const,
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^(ජ|පෙ|මා|අ|මැ|ජූ|සැ|ඔ|නෙ|දෙ)/i,
  abbreviated: /^(ජන|පෙබ|මාර්තු|අප්‍රේල්|මැයි|ජූනි|ජූලි|අගෝ|සැප්|ඔක්|නොවැ|දෙසැ)/i,
  wide: /^(ජනවාරි|පෙබරවාරි|මාර්තු|අප්‍රේල්|මැයි|ජූනි|ජූලි|අගෝස්තු|සැප්තැම්බර්|ඔක්තෝබර්|නොවැම්බර්|දෙසැම්බර්)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^ජන/i,
    /^පෙබ/i,
    /^මාර්තු/i,
    /^අප්‍රේල්/i,
    /^මැයි/i,
    /^ජූනි/i,
    /^ජූලි/i,
    /^අගෝ/i,
    /^සැප්/i,
    /^ඔක්/i,
    /^නොවැ/i,
    /^දෙසැ/i,
  ] as const,
  any: [
    /^ජ/i,
    /^පෙ/i,
    /^මාර්/i,
    /^අප්‍රේ/i,
    /^මැයි/i,
    /^ජූනි/i,
    /^ජූලි/i,
    /^අගෝ/i,
    /^සැ/i,
    /^ඔ/i,
    /^නො/i,
    /^දෙ/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^(ඉ|ස|අ|බ|බ්‍ර|සි|සෙ)/i,
  short: /^(ඉරි|සඳු|අඟ|බදා|බ්‍රහ|සිකු|සෙන)/i,
  abbreviated: /^(ඉරිදා|සඳුදා|අඟහ|බදාදා|බ්‍රහස්|සිකු|සෙන)/i,
  wide: /^(ඉරිදා|සඳුදා|අඟහරුවාදා|බදාදා|බ්‍රහස්පතින්දා|සිකුරාදා|සෙනසුරාදා)/i,
};
const parseDayPatterns = {
  narrow: [/^ඉ/i, /^ස/i, /^අ/i, /^බ/i, /^බ්‍ර/i, /^සි/i, /^සෙ/i] as const,
  any: [/^ඉ/i, /^සඳු/i, /^අ/i, /^බදා/i, /^බ්‍රහ/i, /^සිකු/i, /^සෙන/i] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(පෙ|ප|මැ|ම|උදෑසන|දහවල්|හවස|රාත්‍රී)/i,
  any: /^((පෙ|ප)\.?\s?ව\.?|මැදියම|මධ්‍යාහ්නය|(උදේ|උදෑසන)|(දවල්|දහවල්)|හවස|(රෑ|රාත්‍රී))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^middernacht/i,
    noon: /^het middaguur/i,
    morning: /ochtend/i,
    afternoon: /middag/i,
    evening: /avond/i,
    night: /nacht/i,
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
