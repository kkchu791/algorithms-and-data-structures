// hash map approach
// time = O(N);
// space = O(N);
var hasCycle = function(head) {
  let current = head;
  const set = new Set();
  
  while (current !== null) { 
      if (set.has(current)) {
          return true;   
      } else {
          set.add(current);
      }
      current = current.next;
  }
  
  return false;
};


// two pointer approach
// time = O(N);
// space = O(1);
var hasCycle = function(head) {
    
  if (!head) {
      return false;
  }
  
  let slow = head;
  let fast = head.next;
  
  while (slow !== fast) {
      if (fast === null || fast.next === null) {
          return false;
      }
      
      slow = slow.next;
      fast = fast.next.next;
  }
  
  return true;
};