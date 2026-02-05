/**
 * 是否为数字
 * ''、Infinity、NaN 都视为非数字
 * @param values
 */
export const isNumber = (...values: any[]): boolean => {
  for (const value of values) {
    const v = String(value).trim()
    if (v === '' || !Number.isFinite(+v) || Number.isNaN(+v))
      return false
  }
  return true
}

/**
 * 增加千分位逗号
 * @param value
 * @param fixed 保留几位小数，默认2位
 */
export const thousandths = (value: any, fixed: number = 2): string => {
  if (!isNumber(value))
    return ''
  const v = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: fixed,
    maximumFractionDigits: fixed,
  }).format(value)
  if (+v === 0)// 有可能是-0，统一转换为0
    return (0).toFixed(fixed)
  return v
}

/**
 * 求和，非数字会被忽略
 * @param values 可传入不定参数或多维数组，最终求的是所有数组元素之和
 */
export const summation = (...values: any[]): number => {
  let sum = 0
  for (const value of values.flat(Infinity)) {
    if (isNumber(value))
      sum += +value
  }
  return sum
}
