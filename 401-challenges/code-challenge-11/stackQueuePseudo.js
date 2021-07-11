'use strict';

// -------------- stack --------------//

class Node {
  constructor(value) { //instance of a node
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() { //instance of a stack
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // methods
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first; // temp: temporary holder
      this.first = newNode;
      this.first.next = temp;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;
    let temp = this.first;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp;
  }

  peek() {
    if (this.length === 0) return null;
    let temp = this.first;
    return temp;
  }

}


// ---------------------------- queue ------------------//



class PseudoQueue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
    this.size = 0;
  }

  enqueue(value) {
    this.pushStack.push(value);
    this.size = this.pushStack.length + this.popStack.length;
  }

  dequeue() {
    if (this.popStack.length > 0) {
      this.size = this.pushStack.length + this.popStack.length - 1;
      return this.popStack.pop();
    }
    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop());
    }
    this.size = this.pushStack.length + this.popStack.length - 1;
    return this.popStack.pop();
  }

}



let queue = new PseudoQueue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log(queue);

module.exports = PseudoQueue;