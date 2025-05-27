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
    for (let i = array.length - 1; i >= 0; i--) {
      const e = array[i], id = e[idKey], pid = e[parentKey]
      const children = map.get(pid) || []
      children.unshift({ ...e })
      map.set(pid, children)
      ids.push(id)
    }
    const o = []
    const values = Array.from(map.values()).flat()
    for (let i = values.length - 1; i >= 0; i--) {
      const e = values[i], id = e[idKey], pid = e[parentKey]
      e[childrenKey] = map.get(id) // 赋值children
      if (!ids.includes(pid)) // 只返回最上级
        o.unshift(e)
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
   * 根据数组中的某一属性去重
   * @param array
   * @param keyName
   * @param onDuplicate key重复是的行为，override=覆盖，ignore=忽略
   */
  uniqueBy<T>(
      array: any[] = [],
      keyName: any = 'id',
      onDuplicate: 'override' | 'ignore' = 'ignore',
  ): T[] {
    const map = new Map()
    const length = array.length
    for (let i = 0; i < length; i++) {
      const e = array[i]
      const key = e[keyName]
      if (onDuplicate === 'ignore' && map.has(key))
        continue
      map.set(key, e)
    }
    return Array.from(map.values());
  }
}