'use strict';
const Node = require('../Node');
const tree = require('../BinaryTree');
const BinarySearchTree = require('../BinarySearchTree');


describe('Nodes functionality', () => {
  test('should create an inst. of the Node class', () => {
    const newNode = new Node();
    expect(newNode instanceof Node).toBeTruthy();
  })

  test('should create a node with the right values', () => {
    const something = 'someThing'
    const newNode = new Node(something);

    expect(newNode.value).toEqual(something);
    expect(newNode.right).toBeNull();
    expect(newNode.left).toBeNull();

  })
})

describe('Binary Search Tree', () => {
  let tree;
  beforeAll(() => {
    tree = new BinarySearchTree();
    tree.add(20);
    tree.add(5);
    tree.add(17);
    console.log(tree);
  })

  test('should add in the right arrangement for preorder', () => {
    tree.add(37);
    tree.add(17);
    expect(tree.preOrder).toEqual([])

  })
})

