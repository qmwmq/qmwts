type Type = 'base64'
export default {
  encrypt(s: any, type: Type): string {
    if (type === 'base64')
      return btoa(s)
    throw '请指定加密类型'
  },
  decrypt(s: any, type: Type): string {
    if (type === 'base64')
      try {
        return atob(s)
      } catch (e) {
        return ''
      }
    throw '请指定解密类型'
  }
}