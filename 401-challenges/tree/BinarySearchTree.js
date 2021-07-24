'use strict';
const Node = require('./Node');
const BinaryTree = require('./BinaryTree');


class BinarySearchTree extends BinaryTree {

  add(value) {
    const node = this.root;

    if (!node) {
      this.root = new Node(value);
      return;
    }
    else {
      const searchTree = function (node) {
        // if data we are passing is less than node.value >> put the node on the left side of the tree otherwise 
        if (value < node.value) {
          if (!node.left) {
            node.left = new Node(value);
            return;
          }
          else if (node.left !== null) {
            return searchTree(node.left); // keep searching
          }
          else if (value > node.value) {
            if (!node.right) {
              node.right = new Node(value);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node)
      }
    }



  }
}

module.exports = BinarySearchTree;