export const debounce = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number = 300,
    immediate = false
) => {
  let timer: ReturnType<typeof setTimeout> | null = null

  const debounced = function (
      this: ThisParameterType<T>,
      ...args: Parameters<T>
  ) {
    const callNow = immediate && !timer

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      timer = null

      if (!immediate) {
        fn.apply(this, args)
      }
    }, delay)

    if (callNow) {
      fn.apply(this, args)
    }
  }

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  return debounced as typeof debounced & {
    cancel: () => void
  }
}

export const defineEnum = <T extends Record<string, string>>(enumObj: T) => {
  return Object.fromEntries(
      Object.entries(enumObj).map(
          ([ code, label ]) => [ code, { code, label } ]
      )
  ) as { [K in keyof T]: { code: K; label: T[K] } }
}