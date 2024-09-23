import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "'පසුගිය' eeee p'ට'",
  yesterday: "'ඊයේ' p'ට'",
  today: "'අද' p'ට'",
  tomorrow: "'හෙට' p'ට'",
  nextWeek: "eeee p'ට'",
  other: 'P',
}

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
