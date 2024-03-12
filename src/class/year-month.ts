import NumberUtils from '../utils/number-utils'
import PrototypeUtils from '../utils/prototype-utils'

export default class YearMonth {
  private date: Date

  constructor(...args: any[]) {
    this.date = new Date()
    if (NumberUtils.isNumber(args[0]))
      this.date.setFullYear(+args[0])
    if (NumberUtils.isNumber(args[1]))
      this.date.setMonth(+args[1] - 1)
    if (PrototypeUtils.isDate(args[0]))
      this.date = args[0]
  }

  static now = (): YearMonth => {
    return new YearMonth()
  }

  static of = (year: any, month: any): YearMonth => {
    return new YearMonth(year, month)
  }

  toString = (): string => {
    return [
      this.date.getFullYear(),
      NumberUtils.leftPadZero(this.date.getMonth() + 1, 2)
    ].join('-')
  }

}