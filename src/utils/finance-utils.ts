// 货币相关工具类
export default {
  // https://support.microsoft.com/zh-cn/office/xirr-%E5%87%BD%E6%95%B0-de1242ec-6477-445b-b11b-a303ad9adc9d
  // 不定期投资收益率
  XIRR(entities: XIRREntity[], guess = 0.1): number | null { // 0.134376748
    // 按照日期从小到大排列
    const list = [ ...entities ].sort((a, b) => a.date.getTime() - b.date.getTime())

    const d0 = list[0].date.getTime()

    const npv = (rate: number): number => {
      let total = 0
      for (let i = list.length - 1; i >= 0; i--) {
        const daysDiff = (list[i].date.getTime() - d0) / (1000 * 3600 * 24)
        total += list[i].amount / Math.pow(1 + rate, daysDiff / 365)
      }
      return total
    }

    let epsilon = 1e-6; // 精度
    let x0 = guess
    let x1
    let iteration = 0

    while (iteration < 100) {
      const f0 = npv(x0)
      const fPrime = (npv(x0 + epsilon) - f0) / epsilon
      x1 = x0 - f0 / fPrime
      if (Math.abs(x1 - x0) < epsilon)
        return x1
      x0 = x1
      iteration++
    }
    return null
  },
}

export interface XIRREntity {
  date: Date,
  amount: number
}