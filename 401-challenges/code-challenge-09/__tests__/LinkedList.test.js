"use strict";
const LinkedList = require('../linkedlist');
describe("linked-list Palindrome ", () => {
  it("returns true for Pal. lists", () => {
    let testList = new LinkedList();

    testList.insertNode('a');
    testList.insertNode('b');
    testList.insertNode('c');
    testList.insertNode('d');
    testList.insertNode('c');
    testList.insertNode('b');
    testList.insertNode('a');

    expect(testList.checkForPalindrome()).toBe(true);
  });

  it(" false when the test fails ", () => {
    let testList = new LinkedList();

    testList.insertNode('t');
    testList.insertNode('a');
    testList.insertNode('k');
    testList.insertNode('e');
    testList.insertNode('k');
    testList.insertNode('d');
    testList.insertNode('t');

    expect(testList.checkForPalindrome()).toBe(false);
  });
});