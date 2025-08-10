/*
 * @lc app=leetcode.cn id=378 lang=javascript
 * @lcpr version=30202
 *
 * [378] 有序矩阵中第 K 小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let n = matrix.length;
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  const countLessEqual = (mid) => {
    let count = 0;
    let row = n - 1, col = 0; // 左下角出发
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= mid) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }
    return count;
  };

  while (left < right) {
    let mid = Math.floor((left + right) >> 1);
    if (countLessEqual(mid) >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

// @lc code=end
/*
// @lcpr case=start
// [[1,5,9],[10,11,13],[12,13,15]]\n8\n
// @lcpr case=end

// @lcpr case=start
// [[-5]]\n1\n
// @lcpr case=end

 */
