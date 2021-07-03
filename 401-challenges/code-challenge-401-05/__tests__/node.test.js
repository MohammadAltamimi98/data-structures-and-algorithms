'use strict';

const Node = require('../node');


describe('Node Modules', () => {
  it('creates an instance with value and next', () => {
    const value = 'some value';
    const node = new Node(value);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull;
  });

});
