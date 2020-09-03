// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isSameQuarter from '.'
// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/opudalo/playground/opudalo/date-fn... Remove this comment to see the full error message
import moment from 'moment'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('isSameQuarter', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    return isSameQuarter(this.dateA, this.dateB)
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'quarter')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
