import PrototypeUtils from './prototype-utils'

export default {
  generate(data: any = {}, params: FormData | URLSearchParams) {
    for (const [ key, value ] of Object.entries(data)) {
      if (PrototypeUtils.isArray(value))
        for (const i of value as any[])
          params.append(key, i)
      else if (isValidValue(value))
        params.append(key, value as string)
    }
    return params
  }
}

function isValidValue(value: any) {
  return value !== null && value !== void 0
}