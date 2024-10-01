import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'
import type { Locale } from '../types'

/**
 * @type {Locale}
 * @category Locales
 * @summary Filipino locale (Philippines)
 * @language Filipino
 * @iso-639-2 fil
 * @author Paolo Miguel de Leon [@pmigueld]{@link https://github.com/pmigueld}
 */
const locale: Locale = {
  code: 'fil',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
}

export default locale
