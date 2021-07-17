const Stack = require('../getmax');

describe('getMax', () => {

  it('returns the largest value in stack.', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(9);
    stack.push(28);
    stack.push(37);
    // console.log(stack);

    expect(stack.getMax()).toEqual(37);
  });

  it('gives us the warning message when stack is empty', () => {
    const stack = new Stack();
    expect(stack.getMax()).toEqual('The stack has the similar status as your social.');
  });

});
