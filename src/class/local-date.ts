// https://juejin.cn/post/7098891689955164168
export default class LocalDate {

  private readonly date!: Date

  constructor()
  constructor(date: Date)
  constructor(date?: Date) {
    if (date == void 0)
      this.date = new Date()
    else
      this.date = date
  }

  static now() {
    return new LocalDate()
  }

  static of(year: number, month: number, date: number) {
    return new LocalDate(new Date(year, month - 1, date))
  }

  toString() {
    return [
      this.date.getFullYear().toString(),
      (this.date.getMonth() + 1).toString().padStart(2, '0'),
      this.date.getDate().toString().padStart(2, '0')
    ].join('-')
  }

}