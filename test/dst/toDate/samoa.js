// This is basic DST test for toDate

import toDate from '../../../src/toDate'
import assert from 'assert'

if (process.env.TZ !== 'Pacific/Apia')
  throw new Error('The test must be run with TZ=Pacific/Apia')

if (parseInt(process.version.match(/^v(\d+)\./)[1]) < 10)
  throw new Error('The test must be run on Node.js version >= 10')

assert.equal(toDate('2011-12-30').getDate(), 31)
assert.equal(toDate('2011-12-30').getDate(), 31)

assert.equal(
  toDate('2011-12-30T03:30').toString(),
  'Sat Dec 31 2011 03:30:00 GMT+1400 (Apia Daylight Time)'
)
