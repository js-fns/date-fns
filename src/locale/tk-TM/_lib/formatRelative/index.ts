import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "'geçen hepde' eeee 'sagat' p",
  yesterday: "'düýn sagat' p",
  today: "'şu gün sagat' p",
  tomorrow: "'ertir sagat' p",
  nextWeek: "eeee 'sagat' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
