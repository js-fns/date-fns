import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'
import type { FormatLong } from '../../../types'

// Ref: https://www.unicode.org/cldr/cldr-aux/charts/32/summary/si.html

const dateFormats = {
  full: 'y MMMM do EEEE',
  long: 'y MMMM d',
  medium: 'y MMM d',
  short: 'y-MM-dd',
}

const timeFormats = {
  full: 'a h:mm:ss zzzz',
  long: 'a h:mm:ss z',
  medium: 'a h:mm:ss',
  short: 'a h:mm',
}

const dateTimeFormats = {
  full: '{{date}}, {{time}}',
  long: '{{date}}, {{time}}',
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}',
}

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
}

export default formatLong
