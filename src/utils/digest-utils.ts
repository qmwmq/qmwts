export const sha256Hex = async (file: File): Promise<string> => {

  // 1. 将文件读取为 ArrayBuffer
  const arrayBuffer = await file.arrayBuffer()

  // 2. 使用 SubtleCrypto 计算 SHA256 哈希
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', arrayBuffer)

  // 3. 将 ArrayBuffer 转换为十六进制字符串（核心转换逻辑）
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('')
}