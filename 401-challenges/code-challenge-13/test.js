'use strict';

const multiBracketValidation = require('./stack-queue-brackets');


describe('Multi braxkets validation function test', () => {

  it('Returns true when all of the bracket pairs are in balance', () => {
    expect(multiBracketValidation(`()[]{}`)).toBe(true);
  });

  it('Returns false when all of the bracket pairs are not in balance', () => {
    expect(multiBracketValidation(`((])))[}]{}`)).toBe(false);
  });

  it('returns true when we have balanced brackets with other characters in the string', () => {
    expect(multiBracketValidation(`({[hey]})`)).toBe(true);
  });

  it('returns false when we have not balanced brackets with other characters in the string', () => {
    expect(multiBracketValidation(`({[hey)]})`)).toBe(false);
  });


});