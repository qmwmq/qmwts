// 货币相关工具类
export default {
  // https://support.microsoft.com/zh-cn/office/xirr-%E5%87%BD%E6%95%B0-de1242ec-6477-445b-b11b-a303ad9adc9d
  // 不定期投资收益率
  XIRR(entities: XIRREntity[], guess = 0.1): number { // 0.134376748
    // 按照日期从小到大排列
    const list = [ ...entities ].sort((a, b) => a.date.getTime() - b.date.getTime())
    let rate = guess // 初始guess利率
    const rateSection = [ rate, rate + 1 ] // guess区间
    let count = 100 // 循环计算100次
    while (count > 0) {
      const o = list.reduce((prev, curr) => {
        const d0 = list[0].date
        const di = curr.date
        const Pi = curr.amount
        const dayDiff = Math.floor((di.getTime() - d0.getTime()) / (24 * 3600 * 1000))
        return Pi / Math.pow(1 + rate, dayDiff / 365) + prev
      }, 0)
      console.log(o.toFixed(8))

      if (o > 0) { // 大于0增加rate

      } else if (o < 0) { // 小于0减少rate

      } else if (o == 0) { // 等于0计算结束
        break
      }
      count--
    }
    return rate
  },
  xirr(values: any, dates: any) {
    if (values.length !== dates.length) {
      throw new Error("Values and dates arrays must have the same length.");
    }

    let guess = 0.1;
    let epsilon = 1e-6;
    let maxIterations = 100;

    function npv(rate: any) {
      let total = 0;
      for (let i = 0; i < values.length; i++) {
        const daysDiff = (dates[i] - dates[0]) / (1000 * 60 * 60 * 24);
        total += values[i] / Math.pow(1 + rate, daysDiff / 365);
      }
      return total;
    }

    let x0 = guess;
    let x1;
    let f0 = npv(x0);
    let iteration = 0;

    while (iteration < maxIterations) {
      const f1 = npv(x0);
      const fPrime = (npv(x0 + epsilon) - f1) / epsilon;
      x1 = x0 - f1 / fPrime;
      if (Math.abs(x1 - x0) < epsilon) {
        return x1;
      }
      x0 = x1;
      iteration++;
    }

    return null;
  }
}

export interface XIRREntity {
  date: Date,
  amount: number
}