export default {
  // 判断是否数字
  ifNaN(number: any, substitute: any): any {
    return this.isNumber(number) ? +number : substitute
  },
  isNumber(...number: any[]): boolean {
    for (let i = number.length - 1; i >= 0; i--) {
      const e = String(number[i]).trim()
      if (e === '' || !isFinite(+e) || isNaN(+e))
        return false
    }
    return true
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
    let sum = 0
    for (let i = array.length - 1; i >= 0; i--) {
      const e = +array[i]
      if (this.isNumber(e))
        sum += e
    }
    return sum
  },
  isBetween(a: number, min: number, max: number): boolean {
    return a >= Math.min(min, max) && a <= Math.max(max, min)
  },
  isInside(a: number, min: number, max: number): boolean {
    return a > Math.min(min, max) && a < Math.max(max, min)
  }
}
