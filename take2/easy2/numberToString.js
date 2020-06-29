/*
In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 
In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(),
Number.prototype.toString, or an expression such as '' + number. 
Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

Examples:

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

Algorithm: 
- initiate a NUMBER_STRINGS variable and assign to array of integer strings
- result variable assign to ''
- convert an input string to the string
  - let index = number % 10;
  - update the number = Math.floor(number / 10)
  - concat NUMBER_STRINGS[index] to string
- return result
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


console.log(integerToString(4321));            // "4321"
console.log(integerToString(0));               // "0"
console.log(integerToString(5000));            // "5000"
console.log(integerToString(1234567890));      // "1234567890"