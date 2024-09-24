import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.js";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "ایک سیکنڈ سے کم",
    other: "{{count}} سیکنڈز سے کم",
  },

  xSeconds: {
    one: "ایک سیکنڈ",
    other: "{{count}} سیکنڈز",
  },

  halfAMinute: "آدھا منٹ",

  lessThanXMinutes: {
    one: "ایک منٹ سے کم",
    other: "{{count}} منٹ سے کم",
  },

  xMinutes: {
    one: "ایک منٹ",
    other: "{{count}} منٹ",
  },

  aboutXHours: {
    one: "تقریباً ایک گھنٹہ",
    other: "تقریباً {{count}} گھنٹہ",
  },

  xHours: {
    one: "ایک گھنٹہ",
    other: "{{count}} گھنٹے",
  },

  xDays: {
    one: "ایک دن",
    other: "{{count}} دن",
  },

  aboutXWeeks: {
    one: "تقریباً ایک ہفتہ",
    other: "تقریباً {{count}} ہفتے",
  },

  xWeeks: {
    one: "ایک ہفتہ",
    other: "{{count}} ہفتے",
  },

  aboutXMonths: {
    one: "تقریباً ایک ماہ",
    other: "تقریباً {{count}} ماہ",
  },

  xMonths: {
    one: "ایک ماہ",
    other: "{{count}} ماہ",
  },

  aboutXYears: {
    one: "تقریباً ایک سال",
    other: "تقریباً {{count}} سال",
  },

  xYears: {
    one: "ایک سال",
    other: "{{count}} سال",
  },

  overXYears: {
    one: "ایک سال سے زیادہ",
    other: "{{count}} سال سے زیادہ",
  },

  almostXYears: {
    one: "تقریباً ایک سال",
    other: "تقریباً {{count}} سال",
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
      return `${result} میں`;
    } else {
      return `${result} پہلے`;
    }
  }

  return result;
};
