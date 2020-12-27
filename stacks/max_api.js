 // Max API with Stack

 //Design a stack that includes a max operation, in addition to push, pop, empty. The max method should return the maximum value stored in the stack.

// s = new Stack();

// s.empty() // true
// s.push(3) 
// s.push(2) 
// s.push(9) 
// s.empty() // false
// s.max() // 9
// s.pop()
// s.max() // 3



class Stack {
  constructor() {
    this.stack = [];
    this.maxes = [] // [[val, count]]
  }

  empty() {
    return this.stack.length === 0;
  }

  max() {
    if (this.maxes.length === 0) {
      return 0; 
    } else {
      return this.maxes[0][0];
    }
  }

  push(val) {
    this.stack.unshift(val);
    if (this.maxes.length === 0) {
      this.maxes.unshift([val, 1]);
      return;
    }

    const currentMax = this.maxes[0][0];

    if (currentMax > val) {
      return;
    }

    if (currentMax === val) {
      this.maxes[0] = [currentMax, this.maxes[0][1] + 1]
    } else {
      this.maxes.unshift([val, 1]);
    }

    return;
  }

  pop() {
    const value = this.stack.shift();

    if (this.empty()) {
      this.maxes.shift();
      return;
    }
  
    const currentMax = this.maxes[0][0];
    const currentMaxCount = this.maxes[0][1];

    if (value === currentMax) {
      if (currentMaxCount > 1) {
        this.maxes[0] = [currentMax, currentMaxCount - 1];
      } else {
        this.maxes.shift();
      }
    }
  }
}

let s = new Stack();
console.log(s.stack, 'stack', s.max(),  'max');
s.push(2);
console.log(s.stack, 'stack', s.max(),  'max');
s.push(2);
console.log(s.stack, 'stack', s.max(),  'max');
s.push(1);
console.log(s.stack, 'stack', s.max(),  'max');
s.push(4);
console.log(s.stack, 'stack', s.max(),  'max');
s.push(5);
console.log(s.stack, 'stack', s.max(),  'max');
s.push(3);
console.log(s.stack, 'stack', s.max(),  'max');


s.pop();
console.log(s.stack, 'stack', s.max(),  'max');
s.pop();
console.log(s.stack, 'stack', s.max(),  'max');
s.pop();
console.log(s.stack, 'stack', s.max(),  'max');
s.pop();
console.log(s.stack, 'stack', s.max(),  'max');

s.push(0);
console.log(s.stack, 'stack', s.max(),  'max');
s.push(3);
console.log(s.stack, 'stack', s.max(),  'max');

