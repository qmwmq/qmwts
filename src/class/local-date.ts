export default class LocalDate {

  private date: Date

  constructor() {
    this.date = new Date()
  }

  toString(): string {
    return [
      this.date.getFullYear(),
      ('0' + (this.date.getMonth() + 1)).slice(-2),
      ('0' + this.date.getDate()).slice(-2)
    ].join('-')
  }

}