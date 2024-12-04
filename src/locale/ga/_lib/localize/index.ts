import { buildLocalizeFn } from '../../../_lib/buildLocalizeFn';
import type { Localize, LocalizeFn } from '../../../types';
import type { Quarter } from '../../../../types';

const eraValues = {
    narrow: ['R', 'A'] as const,
    abbreviated: ['RC', 'AD'] as const,
    wide: ['Roimh Chríost', 'Ann Domini'] as const,
};

const quarterValues = {
    narrow: ['1', '2', '3', '4'] as const,
    abbreviated: ['R1', 'R2', 'R3', 'R4'] as const,
    wide: ['1ú ráithe', '1ú ráithe', '1ú ráithe', '1ú ráithe'] as const,
};

const monthValues = {
    narrow: ['E', 'F', 'M', 'A', 'B', 'M', 'I', 'L', 'M', 'D', 'S', 'N'] as const,
    abbreviated: [
        'Ean',
        'Feabh',
        'Márt',
        'Aib',
        'Beal',
        'Meith',
        'Iúil',
        'Lún',
        'M.F.',
        'D.F.',
        'Samh',
        'Noll',
    ] as const,
    wide: [
        'Eanáir',
        'Feabhra',
        'Márta',
        'Aibreán',
        'Bealtaine',
        'Meitheamh',
        'Iúil',
        'Lúnasa',
        'Meán Fómhair',
        'Deireadh Fómhair',
        'Samhain',
        'Nollaig',
    ] as const,
};

const dayValues = {
    narrow: ['D', 'L', 'M', 'C', 'D', 'A', 'S'] as const,
    short: ['Do', 'Lu', 'Má', 'Cé', 'Dé', 'A', 'Sa'] as const,
    abbreviated: ['Domh', 'Luan', 'Máirt', 'Céad', 'Déar', 'Aoine', 'Sath'] as const,
    wide: [
        'Dé Domhnaigh',
        'Dé Luain',
        'Dé Máirt',
        'Dé Céadaoin',
        'Déardaoin',
        'Dé hAoine',
        'Dé Sathairn',
    ] as const,
};

const dayPeriodValues = {
    narrow: {
        am: 'r.n',
        pm: 'i.n',
        midnight: 'meán oíche',
        noon: 'meán lae',
        morning: 'maidin',
        afternoon: 'tráthnóna',
        evening: 'tráthnóna',
        night: 'oíche',
    },
    abbreviated: {
        am: 'r.n',
        pm: 'i.n',
        midnight: 'meán oíche',
        noon: 'meán lae',
        morning: 'maidin',
        afternoon: 'tráthnóna',
        evening: 'tráthnóna',
        night: 'oíche',
    },
    wide: {
        am: 'r.n',
        pm: 'i.n',
        midnight: 'meán oíche',
        noon: 'meán lae',
        morning: 'maidin',
        afternoon: 'tráthnóna',
        evening: 'tráthnóna',
        night: 'oíche',
    },
};

const formattingDayPeriodValues = {
    narrow: {
        am: 'r.n',
        pm: 'i.n',
        midnight: 'meán oíche',
        noon: 'meán lae',
        morning: 'ar maidin',
        afternoon: 'tráthnóna',
        evening: 'tráthnóna',
        night: 'san oíche',
    },
    abbreviated: {
        am: 'r.n',
        pm: 'i.n',
        midnight: 'meán oíche',
        noon: 'meán lae',
        morning: 'ar maidin',
        afternoon: 'tráthnóna',
        evening: 'tráthnóna',
        night: 'san oíche',
    },
    wide: {
        am: 'r.n',
        pm: 'i.n',
        midnight: 'meán oíche',
        noon: 'meán lae',
        morning: 'ar maidin',
        afternoon: 'tráthnóna',
        evening: 'tráthnóna',
        night: 'san oíche',
    },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber) =>
{
    const number = Number(dirtyNumber)
    const output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
    return number + output;
};

const localize: Localize = {
    ordinalNumber,

    era: buildLocalizeFn({
        values: eraValues,
        defaultWidth: 'wide',
    }),

    quarter: buildLocalizeFn({
        values: quarterValues,
        defaultWidth: 'wide',
        argumentCallback: (quarter) => quarter - 1,
    }),

    month: buildLocalizeFn({
        values: monthValues,
        defaultWidth: 'wide',
    }),

    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: 'wide',
    }),

    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: 'wide',
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: 'wide',
    }),
};

export default localize;