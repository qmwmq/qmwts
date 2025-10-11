export default {
  // 判断是否数字
  ifNaN(value: any, substitute: any): any {
    return this.isNumber(value) ? +value : substitute
  },
  isNumber(...values: any[]): boolean {
    for (let i = values.length - 1; i >= 0; i--) {
      const e = String(values[i]).trim()
      if (e === '' || !Number.isFinite(+e) || Number.isNaN(+e))
        return false
    }
    return true
  },
  // 增加千分位分隔符
  thousandths(value: any, fixed: number = 2): string {
    if (!this.isNumber(value))
      return ''
    value = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: fixed,
      maximumFractionDigits: fixed,
    }).format(value)
    if (+value === 0)// -0转为0
      return (0).toFixed(fixed)
    return value
  },
  summation(...values: any[]): number {
    let sum = 0
    const values0 = values.flat(Infinity)
    for (let i = values0.length - 1; i >= 0; i--) {
      const e = +values0[i]
      if (this.isNumber(e))
        sum += e
    }
    return sum
  },
  isBetween(value: number, min: number, max: number): boolean {
    return value >= Math.min(min, max) && value <= Math.max(max, min)
  },
  isInside(value: number, min: number, max: number): boolean {
    return value > Math.min(min, max) && value < Math.max(max, min)
  },
  extractNumbers(value: any): string {
    const v = String(value)
    let result = ''
    let hasDot = false
    for (let i = 0; i < v.length; i++) {
      const ch = v[i]
      if (/[0-9]/.test(ch)) {
        result += ch
      } else if (ch === '-' && result === '') { // 负号只能在最前
        result += ch
      } else if (ch === '.' && !hasDot) { // 只能有一个小数点
        result += ch
        hasDot = true
      }
    }
    return result
  }
}
