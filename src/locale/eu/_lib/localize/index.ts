import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["K.a.", "K.o."] as const,
  abbreviated: ["K.a.", "K.o."] as const,
  wide: ["Kristo aurretik", "Kristo ondoren"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1Hh", "2Hh", "3Hh", "4Hh"] as const,
  wide: [
    "1. hiruhilekoa",
    "2. hiruhilekoa",
    "3. hiruhilekoa",
    "4. hiruhilekoa",
  ] as const,
};

const monthValues = {
  narrow: ["u", "o", "m", "a", "m", "e", "u", "a", "i", "u", "a", "a"] as const,
  abbreviated: [
    "urt.",
    "ots.",
    "mar.",
    "api.",
    "mai.",
    "eka.",
    "uzt.",
    "abu.",
    "ira.",
    "urr.",
    "aza.",
    "abe.",
  ] as const,
  wide: [
    "urtarrila",
    "otsaila",
    "martxoa",
    "apirila",
    "maiatza",
    "ekaina",
    "uztaila",
    "abuztua",
    "iraila",
    "urria",
    "azaroa",
    "abendua",
  ] as const,
};

const dayValues = {
  narrow: ["i", "a", "a", "a", "o", "o", "l"] as const,
  short: ["ig", "al", "as", "az", "og", "or", "lr"] as const,
  abbreviated: ["ig.", "al.", "ar.", "az.", "og.", "or.", "lr."] as const,
  wide: [
    "igandea",
    "astelehena",
    "asteartea",
    "asteazkena",
    "osteguna",
    "ostirala",
    "larunbata",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "gauerd.",
    noon: "eguerd.",
    morning: "goiz.",
    afternoon: "arrats.",
    evening: "iluntz.",
    night: "gaua",
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gauerd.",
    noon: "eguerd.",
    morning: "goizald.",
    afternoon: "arrats.",
    evening: "iluntz.",
    night: "gaua",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gauerdia",
    noon: "eguerdia",
    morning: "goizaldea",
    afternoon: "arratsaldea",
    evening: "iluntzea",
    night: "gaua",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "gauerd.",
    noon: "eguerd.",
    morning: "goizald.",
    afternoon: "arrats.",
    evening: "iluntz.",
    night: "gauean",
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gauerd.",
    noon: "eguerd.",
    morning: "goizald.",
    afternoon: "arrats.",
    evening: "iluntz.",
    night: "gauean",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gauerdian",
    noon: "eguerdian",
    morning: "goizaldean",
    afternoon: "arratsaldean",
    evening: "iluntzean",
    night: "gauean",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + ".";
};

export const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
