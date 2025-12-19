export default {
  /**
   * 数组转化为树形结构
   * @param array 数组
   * @param idKey id
   * @param parentKey 关联上级字段
   * @param childrenKey 下级字段
   */
  treeify<T>(
      array: any[] = [],
      idKey: string = 'id',
      parentKey: string = 'parentId',
      childrenKey: string = 'children'
  ): T[] {
    const map = new Map() // 先根据每项的parentId将该项放入Map
    const ids = [] // 记录所有的id，parentId不在这个集合内则说明是最上级
    const length = array.length
    for (let i = 0; i < length; i++) {
      const e = array[i]
      if (e == null) continue
      const id = e[idKey], pid = e[parentKey]
      const children = map.get(pid) ?? []
      children.push(e)
      map.set(pid, children)
      ids.push(id)
    }
    const o = []
    const values = Array.from(map.values()).flat()
    const length2 = values.length
    for (let i = 0; i < length2; i++) {
      const e = values[i], id = e[idKey], pid = e[parentKey]
      e[childrenKey] = map.get(id) // 赋值children
      if (!ids.includes(pid)) // 只返回最上级
        o.push(e)
    }
    return o
  },
  /**
   * 查询祖先
   * @param array 数组
   * @param id 查询指定id的祖先
   * @param idKey id的key
   * @param parentKey parent的key
   */
  getAncestors<T>(array: any[] = [],
                  id: any,
                  idKey: string = 'id',
                  parentKey: string = 'parentId'
  ): T[] {
    // 建立 id - item 的映射
    const idMap = new Map()
    for (let i = array.length - 1; i >= 0; i--) {
      const e = array[i], { [idKey]: itemId } = e
      idMap.set(itemId, e)
    }
    const result: T[] = []

    let current = idMap.get(id)
    while (current) {
      let parentId = current[parentKey]
      const parent = idMap.get(parentId)
      if (parent) {
        result.unshift(parent)
        current = parent
      } else {
        break
      }
    }
    return result
  },
  /**
   * 查询后代
   * @param array 数组
   * @param id 查询指定id的祖先
   * @param idKey id的key
   * @param parentKey parent的key
   */
  getDescendants<T>(array: any[] = [],
                    id: any,
                    idKey: string = 'id',
                    parentKey: string = 'parentId'
  ): T[] {
    const result: T[] = []
    const dfs = (currentId: any) => {
      for (let i = array.length - 1; i >= 0; i--) {
        const e = array[i], itemId = e[idKey], pid = e[parentKey]
        if (pid === currentId) {
          result.unshift(e)
          dfs(itemId)
        }
      }
    }
    dfs(id)
    return result
  },
  /**
   * 根据数组元素中的某一属性进行去重
   * @param array
   * @param value 获取元素唯一标识的函数
   * @param override 遇到重复元素是否覆盖
   */
  uniqueBy<T, K = unknown>(
      array: T[] = [],
      value: (item: T) => K,
      override: boolean = false
  ): T[] {
    array = array ?? []
    const map = new Map<K, T>()
    for (let i = 0; i < array.length; i++) {
      const e: T = array[i]
      if (e == null) continue
      const key: K = value(e)
      if (!map.has(key) || override)
        map.set(key, e)
    }
    return Array.from(map.values())
  },
  sort<T>(array: T[], order: 'asc' | 'desc', ...values: ((item: T) => number)[]): void {
    if (!array || array.length === 0 || values.length === 0)
      return

    const multiplier = order === 'asc' ? 1 : -1

    array.sort((a, b) => {
      for (const fn of values) {
        const valueA = fn(a)
        const valueB = fn(b)

        if (valueA - valueB !== 0)
          return (valueA - valueB) * multiplier

      }
      return 0
    })
  },
  merge(
      value: (item: any) => any,
      ...arrays: any[]
  ) {
    console.log(123)
  }
}