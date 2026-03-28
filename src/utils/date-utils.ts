import { DateTime } from 'luxon'
import { prototype } from './prototype-utils2'

export const formatDateDiff = (date1: any, date2?: any): string => {
  if (!date2)
    date2 = DateTime.now().startOf('day')
  date1 = parseDate(date1)
  if (!date1) return ''
  if (date1.diff(date2).as('days') > 0) // date1应该比date2小，如果不是则交换参数
    [ date1, date2 ] = [ date2, date1 ] // 交换参数
  const { years, months, days } = date2.diff(date1, [ 'years', 'months', 'days' ]).toObject()

  // 只收集不为 0 的部分
  const parts = []
  if (years > 0) parts.push(`${ years }年`)
  if (months > 0) parts.push(`${ months }个月`)
  if (days > 0) parts.push(`${ days }天`)
  // 拼接成最终字符串
  return parts.join('')
}

export const formatDateTime = (date: any): string => {
  date = parseDate(date)
  return date ? date.toFormat('yyyy-MM-dd HH:mm') : ''
}

export const parseDate = (date: any): DateTime | null => {
  let luxonDate: DateTime | undefined = void 0;
  if (date instanceof DateTime) luxonDate = date
  else if (prototype(date) === 'Number') luxonDate = DateTime.fromMillis(date)
  else if (prototype(date) === 'Date') luxonDate = DateTime.fromJSDate(date)
  else if (prototype(date) === 'String') luxonDate = DateTime.fromISO(date)
  if (luxonDate?.isValid)
    return luxonDate
  return null
}