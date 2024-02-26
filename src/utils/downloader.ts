import * as JSZip from 'jszip'
import FileUtils from './file-utils'

export default {
  async zip(urls: Array<any>) {
    const { fetch } = window
    if (!fetch) {
      alert('您的浏览器不支持fetch')
      return
    }

    const zip = new JSZip()
    let index = 1
    for (const url of urls) {
      const response = await fetch(url)
      const blob = await response.blob()
      zip.file([ index++, FileUtils.fileType(url) ].filter(e => !!e).join('.'), blob)
    }
    zip.generateAsync({ type: 'blob' }).then(blob => {
      const { URL } = window
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.click()
      URL.revokeObjectURL(url)
    })
  }
}