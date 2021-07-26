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
    try {
      let current = this.root; // initiate current to be your pointer
      if (!current) throw new Error('There is no root');
      let data = []; // initaiate an empty array to hold the values of nodes
      let arrayOfNodes = [];// initiate an empty array to hold all nodes 

      // push the root node to the arrayOfNodes
      arrayOfNodes.push(current);

      //if root ddin't exist >> return false without traversing
      if (arrayOfNodes.length === 0) {
        return false;
      }


      // use a while loop to traverse 
      while (arrayOfNodes.length) {
        current = arrayOfNodes.shift(); // define the current to equal the first item in the array and remove it from the array (zeroth index); 
        data.push(current.value); //push the value to the data array
        if (current.left) {
          arrayOfNodes.push(current.left);
        }; // if current.left exist then push the current.left to the array of nodes.
        if (current.right) {
          arrayOfNodes.push(current.right);
        } // if current.right exist then push the current.right to the array of nodes for the next use of `current=arrayOfNodes.shift();`
      }
      return data;
    }
    catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = BinaryTree;

