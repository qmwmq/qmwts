import PrototypeUtils from './prototype-utils'

export default {
  isObject(o: any): boolean {
    if (PrototypeUtils.isObject(o))
      return true
    try {
      return PrototypeUtils.isObject(JSON.parse(o))
    } catch (e) {
      return false
    }
  },
  isArray(o: any): boolean {
    if (PrototypeUtils.isArray(o))
      return true
    try {
      return PrototypeUtils.isArray(JSON.parse(o))
    } catch (e) {
      return false
    }
  },
  parseObject<T>(o: any): T {
    if (PrototypeUtils.isObject(o))
      return <T>o
    return this.isObject(o) ? <T>JSON.parse(o) : <T>{}
  },
  parseArray<T>(o: any): T[] {
    if (PrototypeUtils.isArray(o))
      return <T[]>o
    return this.isArray(o) ? <T[]>JSON.parse(o) : <T[]>[]
  },
  /* 迁移至object-utils，后续删除 */
  optionalChaining(o: any = {}, chain: string, substitute: any = ''): any {
    const chaining: string[] = chain.split('.')
    for (const key of chaining) {
      try {
        o = o[key]
      } catch (e) {
        o = ''
      }
    }
    if ([ void 0, null ].includes(o))
      return substitute
    return o
  },
  /* 迁移至object-utils，后续删除 */
  // 将一个object的值全部设为null，主要用于naive-ui
  setNull(o: any = {}, exclusions: any = []): void {
    for (const key in o)
      if (!exclusions.includes(key))
        o[key] = null
  }
}