import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'last' eeee p 'ከሰዓት'",
  yesterday: "'ትናንት' p 'ከሰዓት",
  today: "'ዛሬ' p 'ከሰዓት",
  tomorrow: "'ነገ' p 'ከሰዓት",
  nextWeek: "eeee p 'ከሰዓት",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
