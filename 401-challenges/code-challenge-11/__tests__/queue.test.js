'use strict';

const PseudoQueue = require('../stackQueuePseudo');

// ------------- QUEUES TEST ------------ //

describe('------- QUEUE WITH STACKS-------', () => {
  it('Can enqueue Properly', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size).toBe(3);
  });

  it('Can dequeue Properly', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.size).toBe(2);
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