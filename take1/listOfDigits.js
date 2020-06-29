/**
 * Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

Examples:

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

Notes: 
- input is a number
- output is an array of numbers

Algorithm: 
- convert a number to a string 
- split string to individual characters and convert to array
- convert each digit string to a number
  - map each string and convert it to a number
- return an array
 */

function digitList(number) {
  return  String(number).split('').map(element => Number(element));
}

console.log(digitList(12345));
console.log(digitList(123));
console.log(digitList(0));
console.log(digitList(90120129));
console.log(digitList(189999999));

console.log(typeof digitList(189999999)[0]);