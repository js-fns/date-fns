import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^(\d+)(.)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(K\.a\.|K\.o\.)/i,
  abbreviated: /^(K\.a\.|K\.o\.)/i,
  wide: /^(Kristo aurretik|Kristo ondoren)/i,
};
const parseEraPatterns = {
  narrow: [/^K\.a\./i, /^K\.o\./i] as const,
  abbreviated: [/^(K\.a\.)/i, /^(K\.o\.)/i] as const,
  wide: [/^(Kristo aurretik)/i, /^(Kristo ondoren)/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]Hh/i,
  wide: /^[1234](.)? hiruhilekoa/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[uomaei]/i,
  abbreviated: /^(urt\.|ots\.|mar\.|api\.|mai\.|eka\.|uzt\.|abu\.|ira\.|urr\.|aza\.|abe\.)/i,
  wide: /^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^u/i,
    /^o/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^e/i,
    /^u/i,
    /^a/i,
    /^i/i,
    /^u/i,
    /^a/i,
    /^a/i,
  ] as const,
  wide: [
    /^urtarrila/i,
    /^otsaila/i,
    /^martxoa/i,
    /^apirila/i,
    /^maiatza/i,
    /^ekaina/i,
    /^uztaila/i,
    /^abuztua/i,
    /^iraila/i,
    /^urria/i,
    /^azaroa/i,
    /^abendua/i,
  ] as const,
  any: [
    /^urt\./i,
    /^ots\./i,
    /^mar\./i,
    /^api\./i,
    /^mai\./i,
    /^eka\./i,
    /^uzt\./i,
    /^abu\./i,
    /^ira\./i,
    /^urr\./i,
    /^aza\./i,
    /^abe\./i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[iaol]/i,
  short: /^(ig|al|as|az|og|or|lr)/i,
  abbreviated: /^(ig\.|al\.|as\.|az\.|og\.|or\.|lr\.)/i,
  wide: /^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i,
};
const parseDayPatterns = {
  narrow: [/^i/i, /^a/i, /^a/i, /^a/i, /^o/i, /^o/i, /^l/i] as const,
  short: [/^ig/i, /^al/i, /^as/i, /^az/i, /^og/i, /^or/i, /^lr/i] as const,
  abbreviated: [
    /^ig\./i,
    /^al\./i,
    /^as\./i,
    /^az\./i,
    /^og\./i,
    /^or\./i,
    /^lr\./i,
  ] as const,
  wide: [
    /^igandea/i,
    /^astelehena/i,
    /^asteartea/i,
    /^asteazkena/i,
    /^osteguna/i,
    /^ostirala/i,
    /^larunbata/i,
  ] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(am|pm|((gauerd|eguerd|goizald|arratsald|iluntz)(\.))|(gaua|gauean))/i,
  any: /^([ap]\.?\s?m\.?|((gauerd|eguerd|goizald|arrats|arratsald|iluntz)(\.|ian|ean))|(gaua|gauean))/i,
};
const parseDayPeriodPatterns = {
  narrow: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^gauerd/i,
    noon: /^eguerd/i,
    morning: /goizald/i,
    afternoon: /arrats/i,
    evening: /iluntz/i,
    night: /gau/i,
  },
  any: {
    am: /^a\.m\./i,
    pm: /^p\.m\./i,
    midnight: /^gauerd/i,
    noon: /^eguerd/i,
    morning: /goizald/i,
    afternoon: /arrats/i,
    evening: /iluntz/i,
    night: /gau/i,
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
    defaultParseWidth: "wide",
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
    defaultParseWidth: "wide",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};
