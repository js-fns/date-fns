import type { FormatDistanceFn } from "../../../types.js";

type Key = keyof typeof withSuffixes | keyof typeof withoutSuffixes;
type Adverb = keyof typeof translations;

const translations = {
  about: "körülbelül",
  over: "több mint",
  almost: "majdnem",
  lessthan: "kevesebb mint",
};

const withoutSuffixes = {
  xseconds: {
    "-1": " másodperce",
    "1": " másodperc",
    "0": " másodperc"
  },
  halfaminute: {
    "-1": "fél perce",
    "1": "fél perc",
    "0": "fél perc",
  },
  xminutes: {
    "-1": " perce",
    "1": " perc",
    "0": " perc"
  },
  xhours: {
    "-1": " órája",
    "1": " óra",
    "0": " óra",
  },
  xdays: {
    "-1": " napja",
    "1": " nap",
    "0": " nap",
  },
  xweeks: {
    "-1": " hete",
    "1": " hét",
    "0": " hét",
  },
  xmonths: {
    "-1": " hónapja",
    "1": " hónap",
    "0": " hónap",
  },
  xyears: {
    "-1": " éve",
    "1": " év",
    "0": " év",
  },
};


const withSuffixes = {
  xseconds: {
    "-1": " másodperccel ezelőtt",
    "1": " másodperc múlva",
    "0": " másodperce",
  },
  halfaminute: {
    "-1": "fél perccel ezelőtt",
    "1": "fél perc múlva",
    "0": "fél perce",
  },
  xminutes: {
    "-1": " perccel ezelőtt",
    "1": " perc múlva",
    "0": " perce",
  },
  xhours: {
    "-1": " órával ezelőtt",
    "1": " óra múlva",
    "0": " órája",
  },
  xdays: {
    "-1": " nappal ezelőtt",
    "1": " nap múlva",
    "0": " napja",
  },
  xweeks: {
    "-1": " héttel ezelőtt",
    "1": " hét múlva",
    "0": " hete",
  },
  xmonths: {
    "-1": " hónappal ezelőtt",
    "1": " hónap múlva",
    "0": " hónapja",
  },
  xyears: {
    "-1": " évvel ezelőtt",
    "1": " év múlva",
    "0": " éve",
  },
};

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  const adverb = token.match(/about|over|almost|lessthan/i);
  const unit = adverb ? token.replace(adverb[0], "") : token;

  const addSuffix = options?.addSuffix === true;
  const key = unit.toLowerCase() as Key;
  const comparison = options?.comparison || 0;

  const translated = addSuffix
    ? withSuffixes[key][comparison]
    : withoutSuffixes[key][comparison];

  let result = key === "halfaminute" ? translated : count + translated;

  if (adverb) {
    const adv = adverb[0].toLowerCase() as Adverb;
    result = translations[adv] + " " + result;
  }

  return result;
};
