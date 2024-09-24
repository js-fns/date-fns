import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "پچھلے eeee 'بجے' p",
  yesterday: "گزشتہ روز 'بجے' p",
  today: "آج 'بجے' p",
  tomorrow: "کل 'بجے' p",
  nextWeek: "اگلے eeee 'بجے' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
