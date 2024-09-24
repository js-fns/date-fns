import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'
import type { Locale } from '../types'

/**
 * @type {Locale}
 * @category Locales
 * @summary Amharic locale (Ethiopia).
 * @language Amharic
 * @iso-639-2 amh
 * @author Lourens de Villiers [@lourensdev]{@link https://github.com/lourensdev}
 */
const locale: Locale = {
  code: 'am',
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
