/*
 * @lc app=leetcode.cn id=59 lang=javascript
 * @lcpr version=30202
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let x = (y = 0);
  let count = 1; // 赋值
  let loop = Math.floor(n / 2); // 循环圈数
  let mid = loop; // 矩阵中心位置，需要单独处理
  let offset = 1; // 控制每一条边遍历的长度，每次循环右边界收窄一位
  let i, j; // i: row j: col
  const res = Array.from({ length: n }).map(() =>
    Array.from({ length: n }).fill(0)
  );
  while (loop--) {
    i = x;
    j = y;
    const border = n - offset;
    while (j < border) {
      res[i][j++] = count++;
    }
    while (i < border) {
      res[i++][j] = count++;
    }

    while (j > y) {
      res[i][j--] = count++;
    }
    while (i > x) {
      res[i--][j] = count++;
    }
    // 缩圈
    x++;
    y++;
    offset++;
  }

  if (n % 2) {
    // 奇数圈，需要单独设置中间
    res[mid][mid] = count;
  }
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
