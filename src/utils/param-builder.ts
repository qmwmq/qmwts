export default {
  build(data: any = {}, params: FormData | URLSearchParams) {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) { // 只遍历自有属性，不要原型链上的属性
        const value = data[key]
        if (Array.isArray(value)) { // 数组循环append
          const len = value.length
          for (let i = 0; i < len; i++) {
            params.append(key, value[i])
          }
        } else if (value != null) {
          params.append(key, value)
        }
      }
    }
    return params
  },
  buildParams(data: any = {}) {
    return this.build(data, new URLSearchParams())
  },
  buildData(data: any = {}) {
    return this.build(data, new FormData())
  },
}