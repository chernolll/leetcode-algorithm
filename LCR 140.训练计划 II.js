/*
 * @lc app=leetcode.cn id=LCR 140 lang=javascript
 * @lcpr version=30202
 *
 * [LCR 140] 训练计划 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function(head, cnt) {
    let slow = fast = head;
    while (cnt--) {
      fast = fast.next;
    }
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
};
// @lc code=end



/*
// @lcpr case=start
// [2,4,7,8]\n1\n
// @lcpr case=end

 */

