const { Node, BinaryTree, } = require('../index');


describe('testing the intersection', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);

  one.right = two;
  one.left = three;
  two.right = four;
  two.left = five;
  three.right = six;

  let tree = new BinaryTree(one);

  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);
  const d = new Node(4);
  const e = new Node(5);
  const f = new Node(6);

  a.right = b;
  a.left = c;
  b.right = d;
  b.left = e;
  c.right = f;


  let tree1 = new BinaryTree(a);



  test('should console tree', () => {
    expect(tree.treeIntersection(tree.root, tree1.root)).isArray[1, 3, 2, 5, 4];


  })

})



