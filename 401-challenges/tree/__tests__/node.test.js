'use strict';
const Node = require('../Node');
const BinaryTree = require('../BinaryTree');

describe('Binary Tree check', () => {
  let tree;

  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    five.right = seven;


    tree = new BinaryTree(one);
  })

  test('should test preorder', () => {
    let expectedOrder = [1, 2, 4, 5, 7, 3, 6];
    // console.log(tree);
    expect(tree.preOrder()).toEqual(expectedOrder)
  })

  test('should test inorder', () => {
    let expectedOrder = [4, 2, 5, 7, 1, 6, 3];
    // console.log(tree);
    expect(tree.inOrder()).toEqual(expectedOrder)
  })

  test('should test postOrder', () => {
    let expectedOrder = [4, 7, 5, 2, 6, 3, 1];
    // console.log(tree);
    expect(tree.postOrder()).toEqual(expectedOrder)
  })

  test('should throw an error when root is null', () => {
    tree = new BinaryTree();
    let expectedOrder = [4, 7, 5, 2, 6, 3, 1];
    expect(() => {
      tree.postOrder()
    }).toThrow('Hold On mate ! There is no bloody root.')
  })

})
