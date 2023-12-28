import PrototypeUtils from './prototype-utils'

export default {
  generateFormData(data: any = {}): FormData {
    return <FormData>generate(data, new FormData())
  },
  generateURLSearchParams(data: any = {}): URLSearchParams {
    return <URLSearchParams>generate(data, new URLSearchParams())
  },
}

function generate(data: any = {}, params: FormData | URLSearchParams) {
  for (const [ key, value ] of Object.entries(data)) {
    if (PrototypeUtils.isArray(value))
      for (const i of <Array<any>>value)
        params.append(key, i)
    else if (isValidValue(value))
      params.append(key, <any>value)
  }
  return params
}

function isValidValue(value: any) {
  return value !== null && value !== void 0
}