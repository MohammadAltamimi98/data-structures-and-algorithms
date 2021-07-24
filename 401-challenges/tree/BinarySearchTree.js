'use strict';
const Node = require('./Node');
const BinaryTree = require('./BinaryTree');


class BinarySearchTree extends BinaryTree {
  add(value) {

    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

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

    _traverse(this.root);
    return;
  }


  contains(val) {
    // let root = this.root;
    if (!this.root) throw new Error('There is no root.');
    const _traverse = node => {
      if (node.value = val) return true;
      if (val < node.value && node.left) { return _traverse(node.left) };
      if (val > node.value && node.right) { return _traverse(node.right) };
      return false;
    }
    return _traverse(this.root);
  }
}

module.exports = BinarySearchTree;