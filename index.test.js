const {
  NumberUtils,
  LocalDate,
  YearMonth,
  JsonUtils,
  UUIDUtils,
  RequestDataGenerator,
  FileUtils,
  DateUtils,
  ArrayUtils,
  FinanceUtils,
} = require('./src/index')

test('DateUtils', () => {

  const a = [
    { date: new Date(2021, 0, 1), amount: -500 },
    { date: new Date(2021, 6, 1), amount: -500 },
    { date: new Date(2022, 0, 1), amount: 1100 },
  ]

  const r = FinanceUtils.XIRR(a)
  console.log((+r).toFixed(9))

  // -1000/(1+x)^(0/365) + 1100/(1+x)^(365/365) = 0
  // 1100/(1+x)=1000
  // 1100/1000 = 1+x
  // 1.1=1+x
  // x=0.1

  // console.log(a)

  // const rate = 0.0812
  // const P0 = -212856
  // const P1 = 213723
  //
  // console.log(P0 / Math.pow(1 + rate, 0 / 365))
  // console.log(P1 / Math.pow(1 + rate, 19 / 365))

  // console.log(
  //     LocalDate.of(2022, 2, 2).toString(),
  //     YearMonth.now().toString()
  // )

})

test('FileUtils', () => {
  console.log(FileUtils.formatSize(1099511627776 * 1025))
})

// 测试isNumber方法
test('isNumber', () => {

  // 一般数字
  expect(NumberUtils.isNumber(1)).toBe(true)
  expect(NumberUtils.isNumber(1.0)).toBe(true)
  expect(NumberUtils.isNumber(1.00)).toBe(true)
  expect(NumberUtils.isNumber(1.01)).toBe(true)
  expect(NumberUtils.isNumber(1.11)).toBe(true)
  expect(NumberUtils.isNumber(123)).toBe(true)
  expect(NumberUtils.isNumber(123)).toBe(true)
  expect(NumberUtils.isNumber(123.1)).toBe(true)
  expect(NumberUtils.isNumber(123.11)).toBe(true)
  expect(NumberUtils.isNumber(123.0)).toBe(true)
  expect(NumberUtils.isNumber(123.00)).toBe(true)

  // 字符串
  expect(NumberUtils.isNumber('')).toBe(false)
  expect(NumberUtils.isNumber(' ')).toBe(false)
  expect(NumberUtils.isNumber('1')).toBe(true)
  expect(NumberUtils.isNumber(' 1')).toBe(true)
  expect(NumberUtils.isNumber(' 1.00')).toBe(true)
  expect(NumberUtils.isNumber(' 1.01')).toBe(true)
  expect(NumberUtils.isNumber(' 1.0a')).toBe(false)
  expect(NumberUtils.isNumber(' null')).toBe(false)
  expect(NumberUtils.isNumber(' undefined')).toBe(false)
  expect(NumberUtils.isNumber(' Infinity')).toBe(false)

  // 特殊值
  expect(NumberUtils.isNumber(null)).toBe(false)
  expect(NumberUtils.isNumber(undefined)).toBe(false)
  expect(NumberUtils.isNumber(void 0)).toBe(false)
  expect(NumberUtils.isNumber(Infinity)).toBe(false)
  expect(NumberUtils.isNumber(-Infinity)).toBe(false)
  expect(NumberUtils.isNumber([])).toBe(false)
  expect(NumberUtils.isNumber({})).toBe(false)
  expect(NumberUtils.isNumber(Array)).toBe(false)
  expect(NumberUtils.isNumber(Object)).toBe(false)

  // 多个数字
  expect(NumberUtils.isNumber('c')).toBe(false)
  expect(NumberUtils.isNumber('')).toBe(false)
  expect(NumberUtils.isNumber(1, 1)).toBe(true)
  expect(NumberUtils.isNumber('1', '1', '2')).toBe(true)
  expect(NumberUtils.isNumber('1', 'a', '2')).toBe(false)
  expect(NumberUtils.isNumber('1', 'a', 'c')).toBe(false)

})

test('thousandths', () => {
  console.log(NumberUtils.thousandths('-0.00'))
  expect(NumberUtils.thousandths(-0)).toBe('0.00')
})

test('formData', () => {
  const a = [
    { "id": 1, "parentId": 0, "name": "首页", },
    { "id": 2, "parentId": 0, "name": "记账管理", },
    { "id": 3, "parentId": 1, "name": "收入", },
    { "id": 4, "parentId": 1, "name": "支出", },
    { "id": 5, "parentId": 1, "name": "统计", },
    { "id": 6, "parentId": 1, "name": "分类设置", },
    { "id": 7, "parentId": 0, "name": "看房工具", },
    { "id": 8, "parentId": 6, "name": "小区", },
    { "id": 9, "parentId": 6, "name": "房", },
  ]

  const b = ArrayUtils.arrayToTree(a)
  console.log(JSON.stringify(b, null, 4))
  console.log(JSON.stringify(a, null, 4))

})
