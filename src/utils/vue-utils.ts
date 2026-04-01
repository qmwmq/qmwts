import { onActivated, onMounted, ref } from 'vue'

interface Options {
  /** 首次进入页面执行 */
  mounted: () => void | Promise<void>
  /** 再次进入页面执行（组件被 keep-alive 缓存后） */
  activated: () => void | Promise<void>
}

export const useKeepAliveInit = (options: Options) => {
  const initialized = ref(false)

  onMounted(async () => {
    await options.mounted()
    initialized.value = true
  })

  onActivated(async () => {
    // 跳过首次激活，因为 onMounted 后会紧跟一次 onActivated
    if (initialized.value)
      await options.activated()
  })
}
