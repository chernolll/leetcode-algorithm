/*
 * @lc app=leetcode.cn id=209 lang=javascript
 * @lcpr version=30202
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const len = nums.length;
    let l = r = 0;
    let sum = 0;
    let res = len + 1;
    while (r < len) {
      sum += nums[r++];
      while (sum >= target) {
        res = res < r - l ? res : r - l;
        sum -= nums[l++];
      }
    }
    return res > len ? 0 : res;
};
// @lc code=end



/*
// @lcpr case=start
// 7\n[2,3,1,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[1,4,4]\n
// @lcpr case=end

// @lcpr case=start
// 11\n[1,1,1,1,1,1,1,1]\n
// @lcpr case=end

 */

