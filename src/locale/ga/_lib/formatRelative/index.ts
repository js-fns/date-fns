import type { FormatRelativeFn } from '../../../types';

const formatRelativeLocale = {
    lastWeek: "eeee 'seo caite ag' p",
    yesterday: "'inné ag' p",
    today: "inniu ag' p",
    tomorrow: "'amárach ag' p",
    nextWeek: "eeee 'ag' p",
    other: 'P',
};

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

export default formatRelative;