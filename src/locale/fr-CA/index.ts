// Same as fr
import { formatDistance } from "../fr/_lib/formatDistance/index.js"
import { formatRelative } from "../fr/_lib/formatRelative/index.js"
import { localize } from "../fr/_lib/localize/index.js"
import { match } from "../fr/_lib/match/index.js"
import type { Locale } from "../types.js"
// Unique for fr-CA
import { formatLong } from "./_lib/formatLong/index.js"
import { localize as localizeOverrides } from "./_lib/localize/index.js"

/**
 * @category Locales
 * @summary French locale (Canada).
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau](https://github.com/izeau)
 * @author François B [@fbonzon](https://github.com/fbonzon)
 * @author Gabriele Petrioli [@gpetrioli](https://github.com/gpetrioli)
 */
export const frCA: Locale = {
  code: "fr-CA",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: {...localize, ...localizeOverrides},
  match: match,

  // Unique for fr-CA
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};
