
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


})

