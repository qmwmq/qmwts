import { describe, expect, it } from 'vitest'
import NumberUtils from '../src/utils/number-utils'


describe('test1', () => {
  it('merge empty object', () => {
    expect(NumberUtils.summation(1, 2, 3)).toBe(6)
    expect(NumberUtils.summation([ 1, 2, 3 ])).toBe(6)
    expect(NumberUtils.summation([ 1, 2, 3 ], 1, 2, 3)).toBe(12)
    expect(NumberUtils.summation(1, 2, 3, [ 1, 2, 3 ])).toBe(12)
    expect(NumberUtils.summation(1, '2', 3, [ '1', 2, 3 ])).toBe(12)
    expect(NumberUtils.summation(1, '2', 3, [ '1xx', 2, 3 ])).toBe(11)
    expect(NumberUtils.isNumber('2021-01-01')).toBe(false)
  })
})
