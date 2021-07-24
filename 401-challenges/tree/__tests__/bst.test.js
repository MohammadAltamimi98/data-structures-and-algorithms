const BinarySearchTree = require('../BinarySearchTree');
const Node = require('../Node');
const BinaryTree = require('../BinaryTree');

describe('Binary Search Tree', () => {
  let tree;
  beforeAll(() => {
    tree = new BinarySearchTree();
    tree.add(5);
    tree.add(17);
    tree.add(30);
  });

  it('add in the right order', () => {
    tree.add(2);
    console.log(tree);
    tree.add(9);
    console.log(tree);
    expect(tree.preOrder()).toEqual([5, 2, 17, 9, 30]);
  });

  // it('throws an error if there was a duplicate', () => {
  //   tree.add(2);
  //   tree.add(9);
  //   expect(() => {
  //     tree.add(9);
  //   }).toThrow('Duplicate is not allowed.')
  // });

  test('should return true if value is in the tree', () => {
    expect(tree.contains(17)).toBeTruthy();

  })
  test('should return false if value is not in the tree', () => {
    console.log(tree);
    expect(tree.contains(1700)).toBeFalsy();

  })

  test('should return false if value is not in the tree', () => {
    let newTree = new BinarySearchTree();
    expect(newTree.contains(1700)).toEqual('The tree is empty.');

  })

});