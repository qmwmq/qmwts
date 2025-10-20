export default {
  build<T extends FormData | URLSearchParams>(data: any = {}, params: T): T {
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
  buildParams(data: any = {}): URLSearchParams {
    return this.build<URLSearchParams>(data, new URLSearchParams())
  },
  buildData(data: any = {}): FormData {
    return this.build<FormData>(data, new FormData())
  },
}