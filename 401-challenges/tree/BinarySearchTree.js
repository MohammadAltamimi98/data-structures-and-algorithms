'use strict';
const Node = require('./Node');
const BinaryTree = require('./BinaryTree');


class BinarySearchTree extends BinaryTree {

  add(value) {
    let root = this.root;
    const node = new Node(value);

    if (!root) {
      this.root = node;
      return;
    }

    let current = this.root;
    const _traverse = (current) => {
      if (current.value < node.value) {
        if (!current.right) {
          current.right = node;
          return;
        }
        _traverse(current.right);
      }

      if (current.value > node.value) {
        if (!current.left) {
          current.left = node;
          return;
        }
        _traverse(current.left);
      }
      if (current.value === node.value) throw new Error('Duplicate is not allowed.');
    };

    _traverse(root);
    return;
  }


  contains(value) {
    let root = this.root;

    if (!root) return 'The tree is empty.';
    let current = this.root;

    while (current) {
      if (value < current.value) {
        current = current.left;
      }
      else if (value > current.value) {
        current = current.right;
      }
      else {
        return true;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;