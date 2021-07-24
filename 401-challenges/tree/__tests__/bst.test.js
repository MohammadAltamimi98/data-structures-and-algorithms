const BinarySearchTree = require('../BinarySearchTree');


describe('Binary Search Tree', () => {
  let tree;
  beforeAll(() => {
    tree = new BinarySearchTree();
    tree.add(1);
    tree.add(7);
  })

  test('should add in the right arrangement for preorder', () => {
    console.log(tree);
    tree.add(25);
    tree.add(70);
    console.log(tree);
    expect(tree.preOrder()).toEqual([1]);
  })

})