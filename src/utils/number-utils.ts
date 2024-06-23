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
    number = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: fixed,
      maximumFractionDigits: fixed,
    }).format(number)
    if (+number === 0)// -0转为普通0
      return (0).toFixed(fixed)
    return number
  },
  summation(array: any[] = []): number {
    return array.reduce((prev, curr) => prev + this.ifNaN(curr, 0), 0)
  },
  leftPadZero(num: number, pad: number): string {
    return ('0' + num).slice(-pad)
  }
}
