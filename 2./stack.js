const LinkedList = require("./linkedList");

class Stack {
  constructor(val) {
    this.stack = new LinkedList(val);
  }

  getStack() {
    return this.stack;
  }

  push(val) {
    this.stack.append(val);
  }

  pop() {
    return this.stack.remove();
  }

  size() {
    return this.stack.getLength();
  }
}

// test cases
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.size()); // 2
