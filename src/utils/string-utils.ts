export default {
  trimAll(str: any): string {
    if ([ void 0, null ].includes(str))
      return ''
    return String(str).split('').map(e => e.trim()).join('')
  },
  uuid(withDash: boolean = false): string {
    return [ 'xxxxxxxx', 'xxxx', '4xxx', 'yxxx', 'xxxxxxxxxxxx' ].join(withDash ? '-' : '').replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }
}