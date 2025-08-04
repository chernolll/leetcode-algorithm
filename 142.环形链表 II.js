/*
 * @lc app=leetcode.cn id=142 lang=javascript
 * @lcpr version=30202
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = fast = head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;

      if (slow == fast) { // 相遇 / 空
        break;
      }
    }

    if (fast == null || fast.next == null) {
      return null; // 没有环
    }

    slow = head;
    while(slow !== fast) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
    
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

