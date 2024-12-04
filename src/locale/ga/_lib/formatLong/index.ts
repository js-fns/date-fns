import { buildFormatLongFn } from '../../../_lib/buildFormatLongFn';
import type { FormatLong } from '../../../types';


const dateFormats = {
    full: 'EEEE, d MMMM yyyy',
    long: 'd MMMM yyyy',
    medium: 'd MMM yyyy',
    short: 'dd/MM/yyyy',
};

const timeFormats = {
    full: 'HH:mm:ss zzzz',
    long: 'HH:mm:ss z',
    medium: 'HH:mm:ss',
    short: 'HH:mm',
};

const dateTimeFormats = {
    full: '{{date}}, {{time}}',
};

const formatLong: FormatLong = {
    date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: 'full',
    }),

    time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: 'full',
    }),

    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: 'full',
    }),
};

export default formatLong;