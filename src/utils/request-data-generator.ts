export default {
  generate(data: any = {}, params: FormData | URLSearchParams) {
    for (const [ key, value ] of Object.entries(data)) {
      if (Array.isArray(value))
        for (const i of value)
          params.append(key, i)
      else if (value != null)
        params.append(key, value as string)
    }
    return params
  }
}

function isValidValue(value: any) {
  return value !== null && value !== void 0
}