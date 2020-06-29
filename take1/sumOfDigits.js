/**
 * Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

Examples:

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

Notes:
- input is a number
- output is a number, which is a sum of the input digits

Algo:
- convert a number to a string; split a string to a list of digits; reduce the digits to their sum
 */

function sum(number) {
  return number.toString().split('').reduce((current, next) => Number(current) + Number(next));
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));