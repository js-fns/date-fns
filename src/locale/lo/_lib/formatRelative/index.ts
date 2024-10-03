import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'ວັນ'eeee'ກ່ອນ ເວລາ' p",
  yesterday: "'ມື້ວານ ເວລາ' p",
  today: "'ມື້ນີ້ ເວລາ' p",
  tomorrow: "'ມື້ອື່ນ ເວລາ' p",
  nextWeek: "'ວັນ'eeee 'ເວລາ' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
