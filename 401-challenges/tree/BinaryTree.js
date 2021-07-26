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

  breadthFirstFunction() {
    let node = this.root; // initiate node to be your pointer
    let data = []; // initaiate an empty array to hold the values of nodes
    let arrayOfNodes = [];// initiate an empty array to hold all nodes 
    //1. push the root node to the arrayOfNodes
    arrayOfNodes.push(node);
    while (arrayOfNodes.length) {
      node = arrayOfNodes.shift(); // define the node to equal the first item in the array and remove it from the array (zeroth index); 
      data.push(node.value); //push the value to the data array
      if (node.left) arrayOfNodes.push(node.left); // if node.left exist then push the node.left to the array of nodes
      if (node.right) arrayOfNodes.push(node.right);// if node.right exist then push the node.right to the array of nodes for the next use of `node=arrayOfNodes.shift();`
    }
    return data;
  }

}

module.exports = BinaryTree;

