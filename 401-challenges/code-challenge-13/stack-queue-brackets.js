'use strict';

const multiBracketValidation = (string) => {

  // 1.turn the string into an array of characters using split

  const arrOfChar = string.split('');

  //2. auxiliary function to sort out the brackets from other characters
  function sortOutBrackets(array) {
    for (let i = 0; i < array.length; i++) {

      if (array[i] === '(' || array[i] === '{' || array[i] === '[' || array[i] === ')' || array[i] === '}' || array[i] === ']') {
        return true;
      } return false;
    }
  }




  //3. filter the sortOutBrackets output into a new array
  let newArray = arrOfChar.filter(sortOutBrackets);


  //4. define the stack array as an empty array
  let stack = [];

  //5. define the brackets couples
  let bracketCouple = {
    '(': ')',
    '[': ']',
    '{': '}'
  };


  //6. loop through the newArray


  for (let i = 0; i < newArray.length; i++) {


    if (newArray[i] === '(' || newArray[i] === '{' || newArray[i] === '[') {
      stack.push(newArray[i]);
    }
    else {
      let end = stack.pop();
      if (newArray[i] !== bracketCouple[end]) return false;
    }
  }

  if (stack.length !== 0) return false;
  return true;
};


module.exports = multiBracketValidation;