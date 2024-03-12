import NumberUtils from '../utils/number-utils'
import PrototypeUtils from '../utils/prototype-utils'

// https://juejin.cn/post/7098891689955164168
export default class LocalDate {

  private date: Date

  constructor(...args: any[]) {
    this.date = new Date()
    if (NumberUtils.isNumber(args[0]))
      this.date.setFullYear(+args[0])
    if (NumberUtils.isNumber(args[1]))
      this.date.setMonth(+args[1] - 1)
    if (NumberUtils.isNumber(args[2]))
      this.date.setDate(args[2])
    if (PrototypeUtils.isDate(args[0]))
      this.date = args[0]
  }

  static now = (): LocalDate => {
    return new LocalDate()
  }

  static of = (year: any, month: any, date: any): LocalDate => {
    return new LocalDate(year, month, date)
  }

  toString = (): string => {
    return [
      this.date.getFullYear(),
      NumberUtils.leftPadZero(this.date.getMonth() + 1, 2),
      NumberUtils.leftPadZero(this.date.getDate(), 2)
    ].join('-')
  }

}