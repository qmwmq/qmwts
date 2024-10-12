export default {
  /**
   * 数组转化为树形结构
   * @param array 数组
   * @param idKey id
   * @param parentKey 关联上级字段
   * @param childrenKey 下级字段
   */
  listToTree<T>(
      array: any[] = [],
      idKey: string = 'id',
      parentKey: string = 'parentId',
      childrenKey: string = 'children'
  ): T[] {
    const map = new Map() // 先根据每项的parentId将该项放入Map
    for (let i = array.length - 1; i >= 0; i--) {
      const e = array[i], { [parentKey]: pid } = e
      const children = map.get(pid) || []
      children.unshift(e)
    }
    const o = []
    for (let i = array.length - 1; i >= 0; i--) {
      const e = array[i], { [idKey]: id, [parentKey]: pid } = e
      e[childrenKey] = map.get(id) // 赋值children
      if (!pid) // 只返回最上级
        o.unshift(e)
    }
    return o
  }
}