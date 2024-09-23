import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";

/**
 * @type {Locale}
 * @category Locales
 * @summary Sinhala locale.
 * @language Sinhala
 * @iso-639-2 sin
 * @author Dilshan [@dilshan-h]{@link https://github.com/dilshan-h}
 * @author Wouter De Schuyter [@wouterds]{@link https://github.com/wouterds}
 */
export const si: Locale = {
  code: "si",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
};
