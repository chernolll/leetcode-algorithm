/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30202
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    let i = nums.length;
    while(i--) {
      const res = target - nums[i];
      if (map.has(res)) {
        return [map.get(res), i];
      }
      map.set(nums[i], i);
    }
    return null;
};
// @lc code=end



/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */

