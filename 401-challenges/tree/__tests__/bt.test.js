'use strict'; const Node = require('../Node');
const BinaryTree = require('../BinaryTree');


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



describe('find max check', () => {
  let tree;

  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(60);
    const seven = new Node(7);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    five.right = seven;


    tree = new BinaryTree(one);
  })

  test('should get max value', () => {
    expect(tree.findMaximumValue()).toBe(60)
  })

})




