import { describe, expect, it } from 'vitest'
import NumberUtils from '../src/utils/number-utils'
import financeUtils from '../src/utils/finance-utils'


describe('test1', () => {
  it('merge empty object', () => {

    console.log(financeUtils.XIRR([
      { date: new Date('2025-11-10'), amount: -9303.00 },
      { date: new Date('2025-11-10'), amount: -9338.50 },
      { date: new Date('2025-11-11'), amount: -10448.46 },
      { date: new Date('2025-11-12'), amount: -10518.97 },
      { date: new Date('2025-11-13'), amount: -9588.30 },
      { date: new Date('2025-11-14'), amount: -10534.04 },
      { date: new Date('2025-11-14'), amount: -4654.50 },
      { date: new Date('2025-11-14'), amount: -4666.90 },
      { date: new Date('2025-11-15'), amount: -10311.95 },
      { date: new Date('2025-12-09'), amount: -17080.56 },
      { date: new Date('2025-12-12'), amount: 19240.20 },
      { date: new Date('2025-12-16'), amount: -18354.76 },
      { date: new Date('2025-12-18'), amount: 98357.84 },
    ]))

    expect(NumberUtils.summation(1, 2, 3)).toBe(6)
    expect(NumberUtils.summation([ 1, 2, 3 ])).toBe(6)
    expect(NumberUtils.summation([ 1, 2, 3 ], 1, 2, 3)).toBe(12)
    expect(NumberUtils.summation(1, 2, 3, [ 1, 2, 3 ])).toBe(12)
    expect(NumberUtils.summation(1, '2', 3, [ '1', 2, 3 ])).toBe(12)
    expect(NumberUtils.summation(1, '2', 3, [ '1xx', 2, 3 ])).toBe(11)
    expect(NumberUtils.isNumber('2021-01-01')).toBe(false)
  })
})
