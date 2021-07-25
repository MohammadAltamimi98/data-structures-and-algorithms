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



  // choose one of the above methods  and use it to insert values in the array
  //define the max value to be the first index of the array
  // start a for loop from 1 till the array length
  // - if the array [i] value is bigger than maxNow 
  //- define maxNow to be the new array[i]
  // and after you loop through all  return maxNow

  findMaximumValue() {
    let array = this.preOrder();
    let maxNow = array[0];
    for (let i = 1; i < array.length; i++) {

      if (array[i] > maxNow) {
        maxNow = array[i];
      }

    }
    return maxNow;
  }
}

module.exports = BinaryTree;