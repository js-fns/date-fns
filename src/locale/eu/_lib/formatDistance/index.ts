import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.js";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "segundo bat baino gutxiago",
    other: "{{count}} segundo baino gutxiago",
  },

  xSeconds: {
    one: "segundo bat",
    other: "{{count}} segundo",
  },

  halfAMinute: "minutu erdi bat",

  lessThanXMinutes: {
    one: "minutu bat baino gutxiago",
    other: "{{count}} minutu baino gutxiago",
  },

  xMinutes: {
    one: "minutu bat",
    other: "{{count}} minutu",
  },

  aboutXHours: {
    one: "ordubete inguru",
    other: "{{count}} ordu inguru",
  },

  xHours: {
    one: "ordu bat",
    other: "{{count}} ordu",
  },

  xDays: {
    one: "egun bat",
    other: "{{count}} egun",
  },

  aboutXWeeks: {
    one: "astebete inguru",
    other: "{{count}} aste inguru",
  },

  xWeeks: {
    one: "aste bat",
    other: "{{count}} aste",
  },

  aboutXMonths: {
    one: "hilabete inguru",
    other: "{{count}} hilabete inguru",
  },

  xMonths: {
    one: "hilabete bat",
    other: "{{count}} hilabete",
  },

  aboutXYears: {
    one: "urtebete inguru",
    other: "{{count}} urte inguru",
  },

  xYears: {
    one: "urte bat",
    other: "{{count}} urte",
  },

  overXYears: {
    one: "urtebete baino gehiago",
    other: "{{count}} urte baino gehiago",
  },

  almostXYears: {
    one: "ia urtebete",
    other: "ia {{count}} urte",
  },
};

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + " barru";
    } else {
      return "duela " + result;
    }
  }

  return result;
};
