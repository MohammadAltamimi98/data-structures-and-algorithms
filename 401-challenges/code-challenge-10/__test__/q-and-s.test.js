'use strict';

const PseudoQueue = require('../queue-stack');

// ======================================== QUEUES TEST ======================================== //
describe('------- QUEUE WITH STACKS-------', () => {
  it('Can enqueue Properly', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.size).toBe(4);
  });

  it('Can dequeue Properly', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(1);
  });

  it('Can dequeue all items in the stack', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

});