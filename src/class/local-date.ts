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

  static now(): LocalDate {
    return new LocalDate()
  }

  static of(year: number, month: number, date: number): LocalDate {
    return new LocalDate(new Date(year, month - 1, date))
  }

  getYear(): number {
    return this.date.getFullYear()
  }

  getMonth(): number {
    return this.date.getMonth() + 1
  }

  getDayOfMonth(): number {
    return this.date.getDate()
  }

  getDayOfWeek(): number {
    return this.date.getDay() || 7
  }

  plusDays(days: number): LocalDate {
    return LocalDate.of(this.getYear(), this.getMonth(), this.getDayOfMonth() + days)
  }

  minusDays(days: number): LocalDate {
    return this.plusDays(-days)
  }

  format(): string {
    return this.toString()
  }

  toString() {
    return [
      this.date.getFullYear().toString(),
      (this.date.getMonth() + 1).toString().padStart(2, '0'),
      this.date.getDate().toString().padStart(2, '0')
    ].join('-')
  }

}