/**
 * Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

Examples:

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

Notes: 
input - number
output - number with reversed digits

Algo:
- convert a number to string and array of chars
- reverse array of chars
- if reversed arr starts with 0s, remove 0s
- join to string and convert to number
 */

function removeZeros(arr) {
  return arr.filter(char => char !== '0');
}

function reverseNumber(number) {
  let numArrReversed = number.toString().split('').reverse();
  return Number(removeZeros(numArrReversed).join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1