import { FormatDistanceFn, FormatDistanceLocale } from '../../../types';


const formatDistanceLocale: FormatDistanceLocale<string> = {
    lessThanXSeconds: 'níos lú ná {{count}} soicind',
    xSeconds: '{{count}} soicind',
    halfAMinute: 'leath nóiméad',
    lessThanXMinutes: 'níos lú ná {{count}} nóiméad',
    xMinutes: '{{count}} nóiméad',
    aboutXHours: 'thart ar {{count}} uair an chloig',
    xHours: '{{count}} uair',
    xDays: '{{count}} lá',
    aboutXWeeks: 'thart ar {{count}} seachtaine',
    xWeeks: '{{count}} seachtaine',
    aboutXMonths: 'thart ar {{count}} mhí',
    xMonths: '{{count}} mhí',
    aboutXYears: 'thart ar {{count}} bhliain',
    xYears: '{{count}} bhliain',
    overXYears: 'thar {{count}} bhliain',
    almostXYears: 'beagnach {{count}} bhliain',
};

const formatDistance: FormatDistanceFn = (token, count, options) =>
{
    const result = formatDistanceLocale[token].replace('{{count}}', count.toString());
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return 'i ' + result;
        } else {
            return result + ' ó shin';
        }
    }

    return result;
};

export default formatDistance;