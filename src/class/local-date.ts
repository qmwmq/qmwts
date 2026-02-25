// https://juejin.cn/post/7098891689955164168
export default class LocalDate {

  private readonly date!: Date

  constructor()
  constructor(date: Date)
  constructor(date?: Date) {
    if (date instanceof Date)
      this.date = date
    else
      this.date = new Date()
  }

  static now(): LocalDate {
    return new LocalDate()
  }

  static parse(date: string | number | Date | null | undefined): LocalDate | null {
    if (date == null)
      return null
    const d = date instanceof Date ? date : new Date(date)
    if (Number.isNaN(d.getTime())) // 无效日期返回null
      return null
    return new LocalDate(d)
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

  getDayOfWeek(): number { // 周日是0
    return this.date.getDay()
  }

  getTime(): number {
    return this.date.getTime()
  }

  plusDays(days: number): LocalDate {
    return LocalDate.of(this.getYear(), this.getMonth(), this.getDayOfMonth() + days)
  }

  plusMonths(months: number): LocalDate {
    return LocalDate.of(this.getYear(), this.getMonth() + months, this.getDayOfMonth())
  }

  plusYears(years: number): LocalDate {
    return LocalDate.of(this.getYear() + years, this.getMonth(), this.getDayOfMonth())
  }

  minusDays(days: number): LocalDate {
    return this.plusDays(-days)
  }

  minusMonths(months: number): LocalDate {
    return this.plusMonths(-months)
  }

  minusYears(years: number): LocalDate {
    return this.plusYears(-years)
  }

  withDayOfMonth(dayOfMonth: number): LocalDate {
    return LocalDate.of(this.getYear(), this.getMonth(), dayOfMonth)
  }

  isAfter(d: LocalDate): boolean {
    return this.getTime() > d.getTime()
  }

  isBefore(d: LocalDate): boolean {
    return this.getTime() < d.getTime()
  }

  format(): string {
    return this.toString()
  }

  toString() {
    const year = this.date.getFullYear()
    const month = String(this.date.getMonth() + 1).padStart(2, '0')
    const day = String(this.date.getDate()).padStart(2, '0')
    return `${ year }-${ month }-${ day }`
  }

}