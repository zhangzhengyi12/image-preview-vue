/**
 *
 * @description 生成旋转矩阵 沿目标轴旋转
 * @export
 * @param {string} 枚举值 x/y/z 目标旋转轴
 * @param {*} deg // 目标旋转角度 非弧度
 */
export function rotateMatrixGenrator(axis, deg) {
  // 转换成弧度
  let arc = deg * (Math.PI / 180)
  let cosArc = Math.cos(arc)
  let sinArc = Math.sin(arc)

  if (axis === 'x') {
    return [
      [1, 0, 0, 0],
      [0, cosArc, -cosArc, 0],
      [0, sinArc, cosArc, 0],
      [0, 0, 0, 1]
    ]
  } else if (axis === 'y') {
    return [
      [cosArc, 0, sinArc, 0],
      [0, 1, 0, 0],
      [-sinArc, 0, cosArc, 0],
      [0, 0, 0, 1]
    ]
  } else {
    return [
      [cosArc, -sinArc, 0, 0],
      [sinArc, cosArc, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ]
  }
}

/**
 *
 * @description 生成一个对角线为1的原始矩阵
 * @export
 */
export function genBaseMatrix(){
return [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
}

/**
 *
 * @description 把二维矩阵转换成CSS 3d矩阵
 * @param {Array} martrix 二维矩阵
 * @returns
 */
export function covertMatrixToCSSMatrix(martrix) {
  return `matrix3d(${martrix.map(v => v.join(',')).join(',')})`
}

// 向量点乘
function vectorMultiplication(a, b) {
  let result = 0
  for (let i = 0, len = a.length; i < len; i++) {
    result += a[i] * b[i]
  }
  return result
}
// 取矩阵的列
function getColumn(matrix, columnIndex) {
  return matrix.map(row => row[columnIndex])
}

/**
 *
 *
 * @description 矩阵乘法
 * @param {[[number]]} a 二维矩阵
 * @param {[[number]]} b 二维矩阵
 * @returns
 */
export function matrixMultiplication(a, b) {
  let result = []
  for (let i = 0, outerLen = a.length; i < outerLen; i++) {
    result[i] = []
    for (let j = 0, innerLen = b[0].length; j < innerLen; j++) {
      // 取列
      let col = getColumn(b, j)
      let row = a[i]
      result[i].push(vectorMultiplication(row, col))
    }
  }
  return result
}
