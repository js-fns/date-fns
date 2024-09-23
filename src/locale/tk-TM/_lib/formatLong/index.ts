import { buildFormatLongFn } from "../../../_lib/buildFormatLongFn/index.js";
import type { FormatLong } from "../../../types.js";

// const dateFormats = {
//   full: "EEEE, MMMM do, y",
//   long: "MMMM do, y",
//   medium: "MMM d, y",
//   short: "MM/dd/yyyy",
// };

const dateFormats = {
  full: "EEEE, do MMMM, y",
  long: "do MMMM, y",
  medium: "d MMM, y",
  short: "dd/MM/yyyy",
};

const timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm",
};

const dateTimeFormats = {
  full: "{{date}} 'sagat' {{time}}",
  long: "{{date}} 'sagat' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

export const formatLong: FormatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};
