import PrototypeUtils from './prototype-utils'

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
    if ([ void 0, null ].includes(o))
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
  }
}