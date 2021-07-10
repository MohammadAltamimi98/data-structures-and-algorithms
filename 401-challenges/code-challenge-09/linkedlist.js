"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  checkForPalindrome() {
    let ll = new LinkedList();
    let firstNode = ll.head;
    let node;
    let currentNode = this.head;

    while (currentNode) {
      if (ll.head == null) {
        node = new Node(currentNode.value);
        ll.head = node;
      } else {
        firstNode = ll.head;
        node = new Node(currentNode.value);
        node.next = firstNode;
        ll.head = node;
      }
      currentNode = currentNode.next;
    }
    currentNode = this.head;
    firstNode = ll.head;
    let result;
    while (currentNode) {
      if (currentNode.value == firstNode.value) {
        result = true;
      } else {
        result = false;
        break;
      }
      firstNode = firstNode.next;
      currentNode = currentNode.next;
    }


    return result;
  }
}

module.exports = LinkedList;