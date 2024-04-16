import * as JSZip from 'jszip'
import FileUtils from './file-utils'

export default {
  async zip(urls: Array<any>) {
    const { fetch, URL } = window
    if (!fetch) {
      alert('您的浏览器不支持fetch')
      return
    }
    urls = [ urls ].flat(Infinity)

    const zip = new JSZip()
    let index = 1
    for (const url of urls) {
      const response = await fetch(url)
      const blob = await response.blob()
      zip.file([ index++, FileUtils.fileType(url) ].filter(e => !!e).join('.'), blob)
    }
    zip.generateAsync({ type: 'blob' }).then(blob => {
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.click()
      URL.revokeObjectURL(a.href)
      a.remove()
    })
  }
}