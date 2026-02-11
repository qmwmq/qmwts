/**
 * 树形结构节点查找（返回所有满足条件的最上级节点）
 * @param tree 树形结构数据
 * @param condition 节点匹配条件（返回true表示匹配）
 * @param algorithm 遍历算法：dfs（深度优先）/bfs（广度优先），默认dfs
 * @param childrenKey 子节点的key名，默认 'children'
 * @returns 所有满足条件的最上级节点数组
 */
export const findTreeNodes = (
    tree: any[],
    condition: (node: any) => boolean,
    algorithm: 'DFS' | 'BFS' = 'DFS',
    childrenKey = 'children',
) => {
// 存储最终匹配的节点
  const result: any[] = []

  // 深度优先遍历（递归版）
  const dfs = (nodes: any[]) => {
    for (const node of nodes) {
      // 深拷贝节点（避免修改原数据），并保留子节点结构
      const nodeCopy = { ...node }
      // 满足条件：直接加入结果（保留所有子节点）
      if (condition(node)) {
        result.push(nodeCopy)
        continue // 无需遍历该节点的子节点，因为已完整保留
      }
      // 不满足条件：递归遍历子节点
      const children = node[childrenKey]
      if (Array.isArray(children) && children.length > 0) {
        dfs(children)
      }
    }
  }

  // 广度优先遍历（迭代版，队列实现）
  const bfs = (nodes: any[]) => {
    // 初始化队列，浅拷贝避免修改原数组
    const queue = [ ...nodes ]
    while (queue.length > 0) {
      const currentNode = queue.shift()!
      // 深拷贝节点
      const nodeCopy = { ...currentNode }
      // 满足条件：加入结果（保留所有子节点）
      if (condition(currentNode)) {
        result.push(nodeCopy)
        continue
      }
      // 不满足条件：子节点入队继续遍历
      const children = currentNode[childrenKey]
      if (Array.isArray(children) && children.length > 0) {
        queue.push(...children)
      }
    }
  }

  // 根据指定算法执行遍历
  if (algorithm === 'DFS') {
    dfs(tree)
  } else {
    bfs(tree)
  }

  return result
}