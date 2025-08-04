/*
 * @lc app=leetcode.cn id=141 lang=javascript
 * @lcpr version=30202
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */



/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast, slow;
    fast = slow = head;

    while(fast && fast.next != null) {
      // 快指针走2步，慢指针走1步
      fast = fast.next.next;
      slow = slow.next;
      // 相遇了，说明含有环
      if (fast === slow) {
        return true;
      }
    }
    return false; // 没有环
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */

