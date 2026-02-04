export default {
  is(o: any, type: string): boolean {
    return Object.prototype.toString.call(o) === `[object ${ type }]`
  },
  isObject(o: any): boolean {
    return this.is(o, 'Object')
  },
  isArray(o: any): boolean {
    return this.is(o, 'Array')
  },
  isFile(o: any): boolean {
    return this.is(o, 'File')
  },
  isNumber(o: any): boolean {
    return this.is(o, 'Number')
  },
  isDate(o: any): boolean {
    return this.is(o, 'Date')
  },
  isFunction(o: any): boolean {
    return this.is(o, 'Function')
  },
  isBoolean(o: any): boolean {
    return this.is(o, 'Boolean')
  },
  isString(o: any): boolean {
    return this.is(o, 'String')
  },
  isFormData(o: any): boolean {
    return this.is(o, 'FormData')
  },
}

