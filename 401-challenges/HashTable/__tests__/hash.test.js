
const Hashmap = require('../index');

describe('Hash - map', () => {
  const hashmap = new Hashmap(2000);
  test('should  get the size right ', () => {
    expect(hashmap).toBeDefined();
    expect(hashmap.size).toEqual(2000);
    expect(hashmap.storage.length).toBe(2000);
  })


  test('should be able to return the index after hash', () => {
    const hashmap = new Hashmap(2000);
    expect(hashmap.hash('mean')).toBe(1923);
  })

  test('should add a new value to the hash table and it should be contained', () => {
    const hashmap = new Hashmap(2000);
    hashmap.add('mean', 'test');
    hashmap.add('zia', 'test1');

    expect(hashmap.contain('mean')).toBeTruthy();
    expect(hashmap.contain('levant')).toBeFalsy();


  })


  test('should get the key from storage', () => {
    const hashmap = new Hashmap(2000);
    hashmap.add('mean', 'test');
    hashmap.add('zia', 'test1');

    expect(hashmap.get('mean')).toEqual('test');

  })


  it('should return an array of the jonied values', () => {
    const Left = new Hashmap(2000);
    let Right = new Hashmap(2000);
    Left.add('fond', 'enamour');
    Left.add('wrath', 'anger');
    Left.add('diligent', 'employed');
    Left.add('outfit', 'garb');
    Left.add('guide', 'usher');

    console.log(Left);
    Right.add('fond', 'averse');
    Right.add('wrath', 'delight');
    Right.add('diligent', 'idle');
    Right.add('guide', 'follow');
    Right.add('flow', 'jam');

    let results = Left.leftJoin(Left, Right);
    expect(results).toStrictEqual([
      [
        "fond",
        "enamour",
        "averse",
      ],
      [
        "diligent",
        "employed",
        "idle",
      ],
      ['wrath', 'anger', 'delight'],
      [
        "outfit",
        "garb",
        "value does not exist!",
      ],
      ['guide', 'usher', 'follow']
    ]);
  });


})

