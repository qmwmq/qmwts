const { NumberUtils, JsonUtils, UUIDUtils } = require('./src/index')
test('isNumber', () => {
  // expect(NumberUtils.thousandths(1)).toBe('1.00')
  // expect(JsonUtils.parseArray("{\"1\":1}")).toStrictEqual([])

  expect(NumberUtils.isNumber(1)).toBe(true)
  expect(NumberUtils.isNumber('c')).toBe(false)
  expect(NumberUtils.isNumber('')).toBe(false)
  expect(NumberUtils.isNumber(null)).toBe(false)
  expect(NumberUtils.isNumber(1, 1)).toBe(true)
  expect(NumberUtils.isNumber('1', '1', '2')).toBe(true)
  expect(NumberUtils.isNumber('1', 'a', '2')).toBe(false)
  expect(NumberUtils.isNumber('1', 'a', 'c')).toBe(false)

})
