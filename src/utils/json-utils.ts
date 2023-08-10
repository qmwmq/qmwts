export default {
  isPrototypeObject(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object Object]'
  },
  isPrototypeArray(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object Array]'
  },
  isObject(o: any): boolean {
    if (this.isPrototypeObject(o))
      return true
    try {
      return this.isPrototypeObject(JSON.parse(o))
    } catch (e) {
      return false
    }
  },
  isArray(o: any): boolean {
    if (this.isPrototypeArray(o))
      return true
    try {
      return this.isPrototypeArray(JSON.parse(o))
    } catch (e) {
      return false
    }
  },
  parseObject<T>(o: any): T {
    if (this.isPrototypeObject(o))
      return <T>o
    return this.isObject(o) ? <T>JSON.parse(o) : <T>{}
  },
  parseArray<T>(o: any): T[] {
    if (this.isPrototypeArray(o))
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