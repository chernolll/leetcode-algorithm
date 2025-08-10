/*
 * @lc app=leetcode.cn id=82 lang=javascript
 * @lcpr version=30202
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
// var deleteDuplicates = function(head) {
//     let dummyUnique = new ListNode(101);
//     let dummyRepeat = new ListNode(101);
//     let p = head;
//     let p1 = dummyUnique;
//     let p2 = dummyRepeat;

//     while (p != null) {
//       if ((p.next && p.val === p.next.val) || (p.val === p2.val)) {
//         p2.next = p;
//         p2 = p2.next;
//       } else { // 不是重复
//         p1.next = p;
//         p1 = p1.next;
//       }
//       p = p.next;
//       p1.next = null;
//       p2.next = null; // 断开
//     }
//     return dummyUnique.next;
// };
var deleteDuplicates = function(head) {
  let dummy = new ListNode(-1);
  let p = dummy, q = head;
  while (q != null) {
    if (q.next && q.next.val === q.val) {
      // 发现重复节点，跳过这些节点
      while (q.next && q.next.val === q.val) {
        q = q.next;
      }
      q = q.next;
      if (q == null) {
        p.next = null;
      }
    } else { // 不重复
      p.next = q;
      p = p.next;
      q = q.next;
    }
  }
  return dummy.next;
};
// @lc code=end




/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

 */

