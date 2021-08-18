class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}


class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  treeIntersection(root1, root2) {
    if (!root1 || !root2) throw new Error('there is no root to comapare');
    let array = [];
    const _traverse = (node1, node2) => {
      if (node1 && node2) {
        if (node1.value === node2.value) {
          array.push(node1.value);
          console.log(array);
        }
        if (node1.left, node2.left) _traverse(node1.left, node2.left);
        if (node1.right, node2.right) _traverse(node1.right, node2.right);
      }
      return array;
    }
    _traverse(root1, root2);
    return array;
  }
}


module.exports = {
  Node, BinaryTree
}