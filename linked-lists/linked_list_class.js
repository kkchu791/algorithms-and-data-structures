class ListNode { 
  constructor(value, next) { 
    this.value = value; 
    this.next = next;
  } 
}

const isNextNodeTail = (head) => {
  if (head.next === null) {
    return false;
  } else {
    return head.next.next === null
  }
  
}

class LinkedList { 
  constructor() { 
    this.tail = null;
    this.head = this.tail;
  }

  insert(int) {
    const node = new ListNode(int, null); 

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return; 
    }

    this.tail.next = node;
    this.tail = node;
  }

  delete(int) {
    let current = this.head;
    let prev = null;
  
    while (current !== null) {

      // account if number is not found 
      if (current.next === null && current.value !== int) {
        console.log("Number was not found")
      }

      // acount for if int is head
      if (current.value === int && prev === null) { 
        this.head = current.next;

        if (current.next === null) {
          this.tail = null;
        }
        break;
      }
      
       // account for if the number is the tail
      if (isNextNodeTail(current)) {
        if (current.next.value === int) { 
          current.next = null;
          this.tail = new ListNode(current.value, null);
          break;
        }
      }
      
      // account for in between numbers
      if (current.value === int) {
        current.value = current.next.value;
        current.next = current.next.next;
        break;
      }

      //increment current
      prev = current; 
      current = current.next; 
    }
  }  
}