import { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Lao locale
 * @language Lao
 * @iso-639-2 lao
 * @author Philaphonh Inthavongsa [@mrarty55]{@link https://github.com/mrarty55}
 */
const locale: Locale = {
  code: 'lo',
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1,
  },
}

export default locale
