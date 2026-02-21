import { prototype } from './prototype-utils2'

const mimeTypeMap = {
  // 基础文件
  'application/pdf': 'pdf',
  'text/plain': 'txt',
  'text/csv': 'csv',
  'application/json': 'json',
  // 图片
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/webp': 'webp',
  // Office 文件（关键解决你的问题）
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
  'application/vnd.ms-excel': 'xls',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
  'application/vnd.ms-powerpoint': 'ppt',
  // 压缩包
  'application/zip': 'zip',
  'application/x-rar-compressed': 'rar',
  'application/x-7z-compressed': '7z',
  // 音频/视频类型
  'audio/mpeg': 'mp3',
  'audio/wav': 'wav',
  'audio/ogg': 'ogg',
  'audio/mp4': 'm4a',
  'audio/flac': 'flac',
  // CAD文件
  'application/vnd.dxf': 'dxf'
}

export const fileType = (o: File | string): string => {
  if (prototype(o) === 'File') {
    const file = o as File
    const type = mimeTypeMap[file.type as keyof typeof mimeTypeMap]
    if (!type)
      return fileType(file.name)
    return type
  } else if (prototype(o) === 'String') {
    const name = o as string
    if (name.includes('.'))
      return name.split('.').pop() || ''
  }
  return ''
}