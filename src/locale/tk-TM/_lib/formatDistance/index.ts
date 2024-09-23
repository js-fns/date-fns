import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.js";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "bir sekuntdan az",
    other: "{{count}} sekuntdan az",
  },

  xSeconds: {
    one: "1 sekunt",
    other: "{{count}} sekunt",
  },

  halfAMinute: "ýarym minut",

  lessThanXMinutes: {
    one: "bir minutdan az",
    other: "{{count}} minutdan az",
  },

  xMinutes: {
    one: "1 minut",
    other: "{{count}} minut",
  },

  aboutXHours: {
    one: "takmynan 1 sagat",
    other: "takmynan {{count}} sagat",
  },

  xHours: {
    one: "1 sagat",
    other: "{{count}} sagat",
  },

  xDays: {
    one: "1 gün",
    other: "{{count}} gün",
  },

  aboutXWeeks: {
    one: "takmynan 1 hepde",
    other: "takmynan {{count}} hepde",
  },

  xWeeks: {
    one: "1 hepde",
    other: "{{count}} hepde",
  },

  aboutXMonths: {
    one: "takmynan 1 aý",
    other: "takmynan {{count}} aý",
  },

  xMonths: {
    one: "1 aý",
    other: "{{count}} aý",
  },

  aboutXYears: {
    one: "takmynan 1 ýyl",
    other: "takmynan {{count}} ýyl",
  },

  xYears: {
    one: "1 ýyl",
    other: "{{count}} ýyl",
  },

  overXYears: {
    one: "1 ýyldan gowrak",
    other: "{{count}} ýyldan gowrak",
  },

  almostXYears: {
    one: "1 ýyl töweregi",
    other: "{count}} ýyl töweregi",
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
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + " soň";
    } else {
      return result + " öň";
    }
  }

  return result;
};
