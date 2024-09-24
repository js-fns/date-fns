import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance";
import { formatLong } from "./_lib/formatLong";
import { formatRelative } from "./_lib/formatRelative";
import { localize } from "./_lib/localize";
import { match } from "./_lib/match";

/**
 * @category Locales
 * @summary Urdu locale (Modern Standard Urdu).
 * @language Modern Standard Urdu
 * @iso-639-2 urd
 * @author Moeen Basra [@moeen-basra]{@link https://github.com/moeen-basra}
 */
export const ur: Locale = {
  code: "ur",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1,
  },
};
