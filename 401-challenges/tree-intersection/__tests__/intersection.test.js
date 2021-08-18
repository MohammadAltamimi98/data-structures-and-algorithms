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



  test('should return array of intersections', () => {
    expect(tree.treeIntersection(tree.root, tree1.root)).toStrictEqual([1, 3, 6, 2, 5, 4]);
  })

  test('should throw an error if one of the roots were not provided ', () => {
    expect(() => {
      tree.treeIntersection(tree.root);
    }).toThrow('there is no root to comapare');
  })

  test('should return partial intersection when only a part intersects', () => {
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);
    const e = new Node(5);
    // const f = new Node(6);

    a.right = b;
    a.left = c;
    b.right = d;
    b.left = e;
    // c.right = f;


    let tree1 = new BinaryTree(a);
    expect(tree.treeIntersection(tree.root, tree1.root)).toStrictEqual([1, 3, 2, 5, 4]);

  })


})



