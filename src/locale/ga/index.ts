import { Locale } from '../types';
import formatDistance from './_lib/formatDistance';
import formatRelative from './_lib/formatRelative';
import localize from './_lib/localize';
import match from './_lib/match';
import formatLong from './_lib/formatLong';

/**
 * @type {Locale}
 * @category Locales
 * @summary Gaelic locale (Ireland).
 * @language Gaelic
 * @iso-639-2 gla
 * @author Alexander Krupko [@AlexKrupko]{@link https://github.com/AlexKrupko}
 */
const locale: Locale = {
    code: 'ga-IE',
    formatDistance,
    formatLong,
    formatRelative,
    localize,
    match,
    options: {
        weekStartsOn: 1 /* Monday */,
        firstWeekContainsDate: 4,
    },
};

export default locale;