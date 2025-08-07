/*
 * @lc app=leetcode.cn id=86 lang=javascript
 * @lcpr version=30202
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummy1 = new ListNode(-1);
    let dummy2 = new ListNode(-1);
    let p1 = dummy1, p2 = dummy2;
    let p = head;

    while (p) {
      if (p.val >= x) {
        p2.next = p;
        p2 = p2.next;
      } else {
        p1.next = p;
        p1 = p1.next;
      }
      // 不断掉的话，p1和p2后面会出现环
      let temp = p.next;
      p.next = null;
      p = temp;
    }
    p1.next = dummy2.next;
    return dummy1.next;
    
};
// @lc code=end



/*
// @lcpr case=start
// [1,4,3,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

 */

