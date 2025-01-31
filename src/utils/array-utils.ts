export default {
  /**
   * 数组转化为树形结构
   * @param array 数组
   * @param idKey id
   * @param parentKey 关联上级字段
   * @param childrenKey 下级字段
   */
  arrayToTree<T>(
      array: any[] = [],
      idKey: string = 'id',
      parentKey: string = 'parentId',
      childrenKey: string = 'children'
  ): T[] {
    const map = new Map() // 先根据每项的parentId将该项放入Map
    const ids = [] // 记录所有的id，parentId不在这个集合内则说明是最上级
    for (let i = array.length - 1; i >= 0; i--) {
      const { [i]: e } = array, { [idKey]: id, [parentKey]: pid } = e
      const children = map.get(pid) || []
      children.unshift({ ...e })
      map.set(pid, children)
      ids.push(id)
    }
    const o = []
    const values = Array.from(map.values()).flat()
    for (let i = values.length - 1; i >= 0; i--) {
      const { [i]: e } = values, { [idKey]: id, [parentKey]: pid } = e
      e[childrenKey] = map.get(id) // 赋值children
      if (!ids.includes(pid)) // 只返回最上级
        o.unshift(e)
    }
    return o
  }
}