'use strict';
const Node = require('../Node');
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


describe('breadth first search', () => {
  let tree;

  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(24);
    const five = new Node(5);
    const six = new Node(60);
    const seven = new Node(77);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    five.right = seven;

    tree = new BinaryTree(one);
  })


  test('should  return values of the nodes according to breadth first arrangement', () => {
    expect(tree.breadthFirstFunction()).toEqual([
      1,
      2,
      3,
      24,
      5,
      60,
      77
    ]);
  })

  test('should  return false', () => {
    tree = new BinaryTree();
    expect(tree.breadthFirstFunction()).toBeFalsy();
  })


})


describe('fizzbuzz', () => {

  it('fizzBuzz method', () => {
    const tree = new BinaryTree();
    tree.root = new Node(3);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(8);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(7);
    tree.root.right.right = new Node(20);
    tree.root.right.right.left = new Node(14);
    tree.root.left.right.right = new Node(16);
    // console.log('tree', tree);
    let fizzBuzzModel = tree.fizzBuzzTree(tree);
    // console.log('tree.root', tree.root);
    // console.log('fizzBuzz', fizzBuzzModel);
    let resultsArray = fizzBuzzModel.breadthFirstFunction()
    expect(resultsArray).toEqual(["Fizz",
      "Buzz",
      "FizzBuzz",
      "8",
      "Fizz",
      "Buzz",
      "7",
      "16",
      "14",]);
  });
})




