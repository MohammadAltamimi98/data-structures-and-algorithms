'use strict';
const PseudoQueue = require('../code-challenge-10/queue-stack');



class Animal {
  constructor(kind) {
    this.kind = kind;
  }
};


class AnimalShelter {
  constructor() {
    this.cat = new PseudoQueue();
    this.dog = new PseudoQueue();
  }

  // enqueue takes in the argument animal
  enqueue(animal) {
    //animal can be either a dog or a cat object.
    if (animal.kind === 'dog') {
      this.dog.enqueue(animal);
      return this.dog;
    }
    else if (animal.kind === 'cat') {
      this.cat.enqueue(animal);
      return this.cat;
    }
    else {
      return 'Just cats and dogs are allowed'
    }
  }


  // dequeue takes in the argument pref
  dequeue(pref) {
    //Return: either a dog or a cat, based on preference
    if (pref.kind === 'dog') {
      this.dog.dequeue(pref);
    }
    else if (pref.kind === 'cat') {
      this.cat.dequeue(pref);
    }
    else {
      return null;
    }
  }

}

let ourShelter = new AnimalShelter();
let kitty = new Animal('rabbit');
console.log(ourShelter.enqueue(kitty));



module.exports = { AnimalShelter, Animal };