import { createSHA256 } from 'hash-wasm'

export const sha256Hex = async (file: File): Promise<string> => {
  const hasher = await createSHA256()
  const chunkSize = 2 * 1024 * 1024 // 2MB

  let offset = 0
  while (offset < file.size) {
    const chunk = file.slice(offset, offset + chunkSize)
    const buffer = await chunk.arrayBuffer()
    hasher.update(new Uint8Array(buffer))
    offset += chunkSize
  }

  return hasher.digest('hex')
}