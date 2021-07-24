class BinaryTree {
  constructor(root) {
    this.root = root;
  }


  // preorder ROOT>>L>>R
  preOrder() {
    if (!this.root) throw new Error('Hold On mate ! There is no bloody root.');
    const results = [];
    const _traverse = (node) => { // no need to require Node.js here because its an input 
      results.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }


  // L>>R>>ROOT
  postOrder() {
    if (!this.root) throw new Error('Hold On mate ! There is no bloody root.');
    const results = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      results.push(node.value);
    };
    _traverse(this.root);
    return results;
  }

  //L>>ROOt>>R
  inOrder() {
    if (!this.root) throw new Error('Hold On mate ! There is no root.');
    const results = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      results.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }
}

module.exports = BinaryTree;