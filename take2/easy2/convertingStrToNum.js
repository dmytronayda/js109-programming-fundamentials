/*
Convert a String to a Number!
The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer.
The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. 
parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). 
Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Examples

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

Algorithm: 
- make an object of ints with numeric values
- split the number string into the array of digits 
- convert digits to the numeric values
- loop from the last to first element of the array and multiply by multiplyer (1, 10, 100, 1000...)
*/

const NUMBERS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
}

let stringToInteger = numString => {
  let digits = numString.split('');
  let arrOfNums = digits.map(digitStr => NUMBERS[digitStr]);
  
  let multiplyBy = 1;
  let numbersToAdd = [];
  for (let index = arrOfNums.length - 1; index >= 0 ; index -= 1) {
    numbersToAdd.push(arrOfNums[index] * multiplyBy);
    multiplyBy *= 10;
  }

  return numbersToAdd.reduce((a, b) => a + b);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("8933") === 8933); // logs true