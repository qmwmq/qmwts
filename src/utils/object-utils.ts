import PrototypeUtils from './prototype-utils'
import NumberUtils from './number-utils'

export default {
  optionalChaining(o: any = {}, chain: string, substitute: any = ''): any {
    const chaining: string[] = chain.split('.')
    for (const key of chaining) {
      try {
        o = o[key]
      } catch (e) {
        o = ''
      }
    }
    if (o == null)
      return substitute
    return o
  },
  // 将一个object的value全部设定为某个值
  setValue(o: any = {}, value: any = null, exclusions: any = []): void {
    for (const key in o)
      if (!exclusions.includes(key))
        o[key] = value
  },
  // 递归合并多个对象，返回一个新的对象
  merge(...objects: any[]): object {
    const data: Record<string, any> = {}
    const length: number = objects.length
    for (let i: number = 0; i < length; i++) {
      const o = objects[i]
      for (const key in o) {
        const v1 = data[key]
        const v2 = o[key]
        if (PrototypeUtils.isObject(v1) && PrototypeUtils.isObject(v2))
          data[key] = this.merge(v1, v2);
        else
          data[key] = v2;
      }
    }
    return data
  },
  // a是否包含b的全部属性
  contains(a: Record<string, any> = {}, b: Record<string, any> = {}): boolean {
    return Object.entries(b).every(([ key, valueB ]) => {
      const valueA = a[key]
      // 都是对象或数组 → 递归比较
      if (PrototypeUtils.isObject(valueA) && PrototypeUtils.isObject(valueB))
        return this.contains(valueA, valueB)
      if (PrototypeUtils.isArray(valueA) && PrototypeUtils.isArray(valueB))
        return this.contains(valueA, valueB)
      if (NumberUtils.isNumber(valueA) && NumberUtils.isNumber(valueB)) // 字符串数字和纯数字全部转为数字进行对比 '1' === 1
        return +valueA === +valueB
      return valueA === valueB
    })
  }
}