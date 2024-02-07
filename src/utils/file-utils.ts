export default {
  formatSize(size: number): string {
    const units = [ 'B', 'KB', 'MB', 'GB', 'TB' ]
    let index = 0
    let s = size
    while (s >= 1024 && index < units.length - 1) {
      index++
      s = s / 1024
    }
    return s.toFixed(1) + units[index]
  }
}