let arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];


function binarySearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}



console.log();

console.log('==================');
console.log('before function ', arrayOfNum);
console.log('val', 5);
console.log('after function', binarySearch(arrayOfNum, 5));
console.log('==================');
console.log('before function ', arrayOfLetters);
console.log('val', 'z');
console.log('after function', binarySearch(arrayOfLetters, 'z'));
console.log('==================');
