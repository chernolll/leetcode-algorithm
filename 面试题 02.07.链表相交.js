/*
 * @lc app=leetcode.cn id=面试题 02.07 lang=javascript
 * @lcpr version=30202
 *
 * [面试题 02.07] 链表相交
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function getNodeLen(head) {
  let i = 0;
  let cur = head;
  while (cur) {
    i++;
    cur = cur.next;
  }
  return i;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lenA = getNodeLen(headA);
  let lenB = getNodeLen(headB);

  let curA = headA;
  let curB = headB;
  if (lenA < lenB) {
    [lenA, lenB] = [lenB, lenA];
    [curA, curB] = [curB, curA];
  }

  let i = lenA - lenB;
  while (i-- > 0) {
    curA = curA.next;
  }
  while (curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};
// @lc code=end

/*
// @lcpr case=start
// 8\n[4,1,8,4,5]\n[5,0,1,8,4,5]\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// 2\n[0,9,1,2,4]\n[3,2,4]\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 0\n[2,6,4]\n[1,5]\n3\n2\n
// @lcpr case=end

 */
