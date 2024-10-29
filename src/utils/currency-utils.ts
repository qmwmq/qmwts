// 货币相关工具类
export default {
  // https://support.microsoft.com/zh-cn/office/xirr-%E5%87%BD%E6%95%B0-de1242ec-6477-445b-b11b-a303ad9adc9d
  // 不定期投资收益率
  XIRR(entities: XIRREntity[]): number {
    // 按照日期从小到大排列
    const list = [ ...entities ].sort((a, b) => a.date.getTime() - b.date.getTime())

    console.log(list)

    const rate = 0.1 // 初始guess利率
    let count = 100 // 循环计算100次
    while (count > 0) {
      const o = entities.reduce((prev, curr) => {
        return 0
      }, 0)

      // let result = 0 // 如果该值不为0，调整rate
      //
      //
      // const d0 = dates[0].getTime() // 第一个支付日
      // const Pi = amounts[amounts.length - 1] // 最后一个支付金额
      //
      // const length = dates.length
      // for (let i = 0; i < length; i++) {
      //   const dayDiff = Math.floor((dates[i].getTime() - d0) / (24 * 3600 * 1000))
      // }
      count--
    }
    return 0
  }
}

export interface XIRREntity {
  date: Date,
  amount: number
}