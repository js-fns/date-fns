import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'iliyopita' eeee p",
  yesterday: "'jana' p",
  today: "'leo' p",
  tomorrow: "'kesho' p",
  nextWeek: 'eeee p',
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
