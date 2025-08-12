/*
 * @lc app=leetcode.cn id=977 lang=javascript
 * @lcpr version=30202
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let r = k = nums.length - 1;
    let l = 0;
    const res = Array.from(k+1).fill(0);
    while (l <= r) {
      const powL = nums[l] * nums[l];
      const powR = nums[r] * nums[r];
      if (powL < powR) {
        res[k--] = powR;
        r--;
      } else {
        res[k--] = powL;
        l++;
      }
    }
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [-4,-1,0,3,10]\n
// @lcpr case=end

// @lcpr case=start
// [-7,-3,2,3,11]\n
// @lcpr case=end

 */

