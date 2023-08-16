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
  optionalChaining(o: any = {}, chain: string, substitute: any = ''): any {
    const chaining = chain.split('.')
    for (const key of chaining)
      o = o[key] || ''
    return o || substitute
  }
}