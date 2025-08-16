/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 * @lcpr version=30202
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let base = 1;
    let res = num;
    let maxChange = -1;
    while (num > 0) {
      if (num % 10 === 6) {
        maxChange = base;
      }
      num = Math.floor(num / 10);
      base *= 10;
    }
    if (maxChange !== -1) {
      res += 3 * maxChange;
    }
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// 9669\n
// @lcpr case=end

// @lcpr case=start
// 9996\n
// @lcpr case=end

// @lcpr case=start
// 9999\n
// @lcpr case=end

 */

