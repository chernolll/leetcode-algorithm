/*
 * @lc app=leetcode.cn id=707 lang=javascript
 * @lcpr version=30202
 *
 * [707] 设计链表
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start

var MyLinkedList = function () {
  this.size = 0;
  this.head = new ListNode(-1);
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.size) {
    return -1;
  }
  let i = 0;
  let p = this.head;
  while (i++ <= index) {
    p = p.next;
  }
  return p.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }
  let p = this.head;
  let i = 0;
  while (i++ < index) {
    p = p.next;
  }
  let node = new ListNode(val, p.next);
  p.next = node;
  this.size += 1;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size) {
    return;
  }
  this.size -= 1;
  let i = 0;
  let p = this.head;
  while (i++ < index) {
    p = p.next;
  }
  p.next = p.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
