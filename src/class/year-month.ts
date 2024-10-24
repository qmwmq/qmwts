export default class YearMonth {

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
    return new YearMonth()
  }

  static of(year: number, month: number) {
    return new YearMonth(new Date(year, month - 1))
  }

  toString() {
    return [
      this.date.getFullYear().toString(),
      (this.date.getMonth() + 1).toString().padStart(2, '0')
    ].join('-')
  }

}