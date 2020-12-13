/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class LinkedList {
  constructor() {
      this.tail = null;
      this.head = null;
  }
  
  insert(val) {
      if (val === null) {
          return;
      }
      
      let newNode = new ListNode(val, null);
      
      if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
          
          // creates a reference to the new object
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
  }
}

class ListNode {
  constructor(val, next) {
      this.val = val;
      this.next = next;
  }
}


var mergeTwoLists = function(l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let ll_res = new LinkedList();
  
  while (current1 !== null || current2 !== null) {
      if (current1 === null) {
          ll_res.insert(current2.val);
          current2 = current2.next;
          continue;
      }
      
      if (current2 === null) {
          ll_res.insert(current1.val);
          current1 = current1.next;
          continue;
      }
      
      
      if (current1.val < current2.val) {
          ll_res.insert(current1.val);
          current1 = current1.next;
      } else {
          ll_res.insert(current2.val);
          current2 = current2.next;
      }
  }
  
  return ll_res.head;
};