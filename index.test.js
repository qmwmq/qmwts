const {
  NumberUtils,
  LocalDate,
  JsonUtils,
  UUIDUtils,
  RequestDataGenerator,
  FileUtils,
  DateUtils
} = require('./src/index')

test('DateUtils', () => {

  console.log(
      LocalDate.of(2022,2,2)
  )

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
  expect(NumberUtils.thousandths(123456)).toBe('123,456.00')
  expect(NumberUtils.thousandths(123456.0)).toBe('123,456.00')
  expect(NumberUtils.thousandths('123456.0')).toBe('123,456.00')
  expect(NumberUtils.thousandths(123456.0, 0)).toBe('123,456')
})

test('formData', () => {
})
