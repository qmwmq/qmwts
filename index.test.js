const { NumberUtils } = require('./index')
test('isNumber', () => {
    const a = 'fdsf'
    expect(NumberUtils.isNumber(a)).toBe(false)
    console.log(a)
})
