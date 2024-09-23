import formatDistance from '../en-US/_lib/formatDistance/index'
import formatLong from '../en-IN/_lib/formatLong/index'
import formatRelative from '../en-US//_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'
import type { Locale } from '../types'

/**
 * @type {Locale}
 * @category Locales
 * @summary Nepali Unicode locale (Nepali Unicode).
 * @language English
 * @author Bipin Mahrjan [@iambpn]{@link https://github.com/iambpn}
 */
const locale: Locale = {
  code: 'en-NP',
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
