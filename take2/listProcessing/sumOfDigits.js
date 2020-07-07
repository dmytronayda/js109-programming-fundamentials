/*
Sum Of Digits

Write a function that takes one argument, a positive integer, and returns the 
sum of its digits. Do this without using for, while, or do...while loops -
instead, use a series of method calls to perform the sum.

Notes: 
- input is a positive integer
- returns a sum of digits

Examples:

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
*/

let sum = int => {
  return int
    .toString()
    .split('')
    .reduce((a, b) => Number(a) + Number(b))
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45