import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'පසුගිය' eeee p'ට'",
  yesterday: "'ඊයේ' p'ට'",
  today: "'අද' p'ට'",
  tomorrow: "'හෙට' p'ට'",
  nextWeek: "eeee p'ට'",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
