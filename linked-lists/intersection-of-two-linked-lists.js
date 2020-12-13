// hashMap approach
// time: O(N + M)
// space: O(N || M)
var getIntersectionNode = function(headA, headB) {
  let currentA = headA;
  let currentB = headB;    
  var set = new Set();
  
  // here we want to create our hash
  while (currentA !== null) {
      set.add(currentA);
      currentA = currentA.next;
  }
  
  while (currentB !== null) {
      if (set.has(currentB)) {
          return currentB; // we've found our intersection
      }
      currentB = currentB.next;
  }
  
  return null;
};


// two pointer approach
// O(N + M)
// O(1)
var getIntersectionNode = function(headA, headB) {
  let currentA = headA;
  let currentB = headB;
  
  if (!currentA || !currentB) {
      return null;
  }
  
  while (currentA || currentB) {
      if (currentA === null) {
          currentA = headB; // sets it to headB
      }
      
      if (currentB === null) {
          currentB = headA; //sets it to headA
      }
      
      if (currentA === currentB) {
          return currentA;
      } else {
          currentA = currentA.next;
          currentB = currentB.next;
      }
  }
  
  return null;
};