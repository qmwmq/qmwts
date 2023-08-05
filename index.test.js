const { NumberUtils, JsonUtils, UUIDUtils } = require('./src/index')
test('isNumber', () => {
  expect(NumberUtils.thousandths(1)).toBe('1.00')
  expect(JsonUtils.parseArray("{\"1\":1}")).toStrictEqual([])
  console.log(UUIDUtils.uuid())
  console.log(UUIDUtils.uuid())
  console.log(UUIDUtils.uuid())
  console.log(UUIDUtils.uuid())
})
