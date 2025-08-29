export interface PageVo<T = any> {
  records?: T[]
  total?: number
  size?: number
  extra?: Record<string, any>
}