export default {
  isPrototypeObject(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object Object]'
  },
  isPrototypeArray(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object Array]'
  },
  isJSONObject(o: any): boolean {
    if (this.isPrototypeObject(o))
      return true
    try {
      return this.isPrototypeObject(JSON.parse(o))
    } catch (e) {
      return false
    }
  },
  isJSONArray(o: any): boolean {
    if (this.isPrototypeArray(o))
      return true
    try {
      return this.isPrototypeArray(JSON.parse(o))
    } catch (e) {
      return false
    }
  },
  toJSONObject<T>(o: any): T {
    if (this.isPrototypeObject(o))
      return <T>o
    return this.isJSONObject(o) ? <T>JSON.parse(o) : <T>{}
  },
  toJSONArray<T>(o: any): T[] {
    if (this.isPrototypeArray(o))
      return <T[]>o
    return this.isJSONArray(o) ? <T[]>JSON.parse(o) : <T[]>[]
  },
  optionalChaining(o: any = {}, chain: string): any {
    const chaining = chain.split('.')
    for (const key of chaining)
      o = o[key] || ''
    return o
  }
}