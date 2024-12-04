import { buildMatchFn } from '../../../_lib/buildMatchFn';
import { buildMatchPatternFn } from '../../../_lib/buildMatchPatternFn';
import { Match } from '../../../types';
import { Quarter } from '../../../../types';

const matchOrdinalNumberPattern = /^(\d+)(d|na|mh)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
    narrow: /^(r|a)/i,
    abbreviated: /^(r\.?\s?c\.?|r\.?\s?r\.?\s?c\.?|a\.?\s?d\.?|r\.?\s?c\.?)/i,
    wide: /^(roimh chríost|roimh ré choiteann|ann domini|ré coitianta)/i,
};
const parseEraPatterns = {
    any: [/^r/i, /^(r|a)/i] as const,
};

const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^r[1234]/i,
    wide: /^[1234]ú? ráithe/i,
};
const parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
    narrow: /^[efmabildsn]/i,
    abbreviated: /^(Ean|Feabh|Márt|Aib|Beal|Meith|Iúil|Lún|M\.F\.|D\.F\.|Samh|Noll|)/i,
    wide: /^(Eanáir|Feabhra|Márta|Aibreán|Bealtaine|Meitheamh|Iúil|Lúnasa|Meán Fómhair|Deireadh Fómhair|Samhain|Nollaig)/i,
};
const parseMonthPatterns = {
    narrow: [
        /^E/i,
        /^F/i,
        /^M/i,
        /^A/i,
        /^B/i,
        /^M/i,
        /^I/i,
        /^L/i,
        /^M/i,
        /^D/i,
        /^S/i,
        /^N/i,
    ] as const,
    any: [
        /^e/i,
        /^f/i,
        /^má/i,
        /^a/i,
        /^b/i,
        /^mei/i,
        /^i/i,
        /^l/i,
        /^meá/i,
        /^d/i,
        /^s/i,
        /^n/i,
    ] as const,
};

const matchDayPatterns = {
    narrow: /^[dlmcas]/i,
    short: /^(Do|Lu|Má|Cé|Dé|A|Sa)/i,
    abbreviated: /^(Domh|Luan|Máirt|Céad|Déar|Aoine|Sath)/i,
    wide: /^(Dé Domhnaigh|Dé Luain|Dé Máirt|Dé Céadaoin|Déardaoin|Dé hAoine|Dé Sathairn)/i,
};
const parseDayPatterns = {
    narrow: [/^d/i, /^l/i, /^m/i, /^c/i, /^d/i, /^a/i, /^s/i] as const,
    any: [/^Dé D/i, /^Dé L/i, /^Dé M/i, /^Dé C/i, /^Déa/i, /^Dé h/i, /^Dé S/i] as const,
};

const matchDayPeriodPatterns = {
    narrow: /^(r|i|me|(meán|ar|san) (oíche|lae|maidin|tráthnóna))/i,
    any: /^([ri]\.?\s?n\.?|(meán|ar|san) (oíche|lae|maidin|tráthnóna))/i,
};
const parseDayPeriodPatterns = {
    any: {
        am: /^r/i,
        pm: /^i/i,
        midnight: /^meán o/i,
        noon: /^meán l/i,
        morning: /ar maidin/i,
        afternoon: /tráthnóna/i,
        evening: /tráthnóna/i,
        night: /san oíche/i,
    },
};

const match: Match = {
    ordinalNumber: buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value: string) => parseInt(value, 10),
    }),

    era: buildMatchFn({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseEraPatterns,
        defaultParseWidth: 'any',
    }),

    quarter: buildMatchFn({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: 'any',
        valueCallback: (index: number) => (index + 1) as Quarter,
    }),

    month: buildMatchFn({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: 'any',
    }),

    day: buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseDayPatterns,
        defaultParseWidth: 'any',
    }),

    dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: 'any',
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: 'any',
    }),
};

export default match;