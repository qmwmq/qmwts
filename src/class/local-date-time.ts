export default class LocalDateTime {

  private readonly date!: Date

  constructor()
  constructor(date: Date)
  constructor(date?: Date) {
    if (date instanceof Date)
      this.date = date
    else
      this.date = new Date()
    this.date.setHours(0, 0, 0, 0) // 设定为0，否则使用time对比会出错
  }

  static now(): LocalDateTime {
    return new LocalDateTime()
  }

  static parse(date: string | number | Date | null | undefined): LocalDateTime | null {
    if (date == null)
      return null
    const d = date instanceof Date ? date : new Date(date)
    if (Number.isNaN(d.getTime())) // 无效日期返回null
      return null
    return new LocalDateTime(d)
  }

  static of(year: number, month: number, date: number): LocalDateTime {
    return new LocalDateTime(new Date(year, month - 1, date))
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

  plusDays(days: number): LocalDateTime {
    return LocalDateTime.of(this.getYear(), this.getMonth(), this.getDayOfMonth() + days)
  }

  plusMonths(months: number): LocalDateTime {
    return LocalDateTime.of(this.getYear(), this.getMonth() + months, this.getDayOfMonth())
  }

  plusYears(years: number): LocalDateTime {
    return LocalDateTime.of(this.getYear() + years, this.getMonth(), this.getDayOfMonth())
  }

  minusDays(days: number): LocalDateTime {
    return this.plusDays(-days)
  }

  minusMonths(months: number): LocalDateTime {
    return this.plusMonths(-months)
  }

  minusYears(years: number): LocalDateTime {
    return this.plusYears(-years)
  }

  withDayOfMonth(dayOfMonth: number): LocalDateTime {
    return LocalDateTime.of(this.getYear(), this.getMonth(), dayOfMonth)
  }

  isAfter(d: LocalDateTime): boolean {
    return this.getTime() > d.getTime()
  }

  isBefore(d: LocalDateTime): boolean {
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