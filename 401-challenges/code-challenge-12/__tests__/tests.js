'use strict';

const { Animal, AnimalShelter } = require('../AnimalShelter');


describe('Animal shelter testing  functions', () => {

  test('can queue a dog', () => {
    let ourShelter = new AnimalShelter();
    let doggy = new Animal('dog');
    ourShelter.enqueue(doggy);
    expect(ourShelter.dog.pushStack.length).toEqual(1);
  });

  test('can queue a cat', () => {
    let ourShelter = new AnimalShelter();
    let kitty = new Animal('cat');
    ourShelter.enqueue(kitty);
    expect(ourShelter.cat.pushStack.length).toEqual(1);
  });

  test('should dequeue dogs ', () => {
    let ourShelter = new AnimalShelter();
    let doggy = new Animal('dog');
    ourShelter.enqueue(doggy);
    ourShelter.enqueue(doggy);
    ourShelter.enqueue(doggy);
    ourShelter.enqueue(doggy);
    ourShelter.dequeue(doggy);

    expect(ourShelter.dog.popStack.length).toEqual(3);
  });

  test('can dequeue a cat', () => {
    let ourShelter = new AnimalShelter();
    let kitty = new Animal('cat');
    ourShelter.enqueue(kitty);
    ourShelter.enqueue(kitty);
    ourShelter.enqueue(kitty);
    ourShelter.enqueue(kitty);
    ourShelter.enqueue(kitty);
    ourShelter.enqueue(kitty);
    ourShelter.dequeue(kitty);
    ourShelter.dequeue(kitty);
    expect(ourShelter.cat.popStack.length).toEqual(4);
  });

  test('should throw an error if you are enquing something else other than a dog or a cat', () => {
    let ourShelter = new AnimalShelter();
    let kitty = new Animal('rabbit');
    expect(ourShelter.enqueue(kitty)).toBe('Just cats and dogs are allowed')
  });

  test('should throw an error if you are dequing something else other than a dog or a cat', () => {
    let ourShelter = new AnimalShelter();
    let kitty = new Animal('rabbit');
    expect(ourShelter.dequeue(kitty)).toBe(null)
  });

});
