// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

import fn from '../../addBusinessDays/index'
import convertToFP from '../_lib/convertToFP/index'

// @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
var addBusinessDays = convertToFP(fn, 2)

export default addBusinessDays
