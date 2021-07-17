// 1. define  Node to build your stack

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

//2. build your stack
class Stack {

  constructor() { //instance of a stack
    this.first = null;
  }

  // methods
  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
    }
    else {
      node.next = this.first;
      this.first = node;
    }
  }



  getMax() {
    if (!this.first) {
      return 'The stack has the similar status as your social.';
    }
    let finality = this.first;
    let arrow = this.first;
    while (finality) {
      if (arrow.value < arrow.next.value) {
        arrow = arrow.next
      }
      finality = finality.next;
    }
    return arrow.value;

  }
}


module.exports = Stack