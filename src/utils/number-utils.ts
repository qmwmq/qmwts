export default {
  // 判断是否数字
  ifNaN(number: any, substitute: any): any {
    return this.isNumber(number) ? +number : substitute
  },
  isNumber(...number: any[]): boolean {
    return number.every(e => {
      e = String(e).trim()
      return e !== '' && isFinite(e) && !isNaN(e)
    })
  },
  // 增加千分位分隔符
  thousandths(number: any, fixed: number = 2): string {
    if (!this.isNumber(number))
      return ''
    if (Object.is(+number, -0))
      number = 0
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: fixed,
      maximumFractionDigits: fixed,
    }).format(number)
  },
  summation(array: any[] = []): number {
    return array.reduce((prev, curr) => prev + this.ifNaN(curr, 0), 0)
  },
  leftPadZero(num: number, pad: number): string {
    return ('0' + num).slice(-pad)
  }
}
