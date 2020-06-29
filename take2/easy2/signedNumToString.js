/*
In the previous exercise, you developed a function that converts non-negative numbers to strings. 
In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). 
You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.

Examples

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

Algorithm:
- if number === 0
  - return 0
- get sign using Math.sign() method (+/-1)
- if sign === -1 
  - convert absolute value of a number to string 
  - return '-' + number
- return '+' + converted strNum
*/

const NUMBER_STRINGS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function integerToString(number) {
  let resultStr = '';

  do {
    let index = number % 10;
    number = Math.floor(number / 10);

    resultStr = NUMBER_STRINGS[index] + resultStr;
  } while (number > 0)

  return resultStr;
}

function signedIntegerToString(number) {
  if (number === 0) return NUMBER_STRINGS[0];
  let sign = Math.sign(number);

  if (sign === -1) {
    return `-${integerToString(Math.abs(number))}`
  } 
  return `+${integerToString(number)}`;
}

console.log(signedIntegerToString(4321) === "+4321"); // true
console.log(signedIntegerToString(-123) === "-123");  // true
console.log(signedIntegerToString(0) === "0");        // true  