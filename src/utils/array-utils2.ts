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

}