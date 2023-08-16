export default {
  isObject(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object Object]'
  },
  isArray(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object Array]'
  },
  isFile(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object File]'
  },
  isNumber(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object Number]'
  },
  isDate(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object Date]'
  },
  isFunction(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object Function]'
  },
  isBoolean(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object Boolean]'
  },
  isString(o: any): boolean {
    return Object.prototype.toString.call(o) === '[object String]'
  },
}