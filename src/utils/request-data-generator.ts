import PrototypeUtils from './prototype-utils'

export default {
  generateFormData(params: any = {}): FormData {
    const data = new FormData()
    for (const [ key, value ] of Object.entries(params)) {
      if (PrototypeUtils.isArray(value)) // 数组循环append
        for (const i of <Array<string>>value)
          data.append(key, i)
      else if (isValidValue(value))
        data.append(key, <string>value)
    }
    return data
  },
  generateURLSearchParams(params: any = {}): URLSearchParams {
    return new URLSearchParams()
  },
}

function isValidValue(value: any) {
  return value !== null && value !== void 0
}