/*
Multiplicative Average
Write a function that takes an array of integers as input, multiplies all of the
integers together, divides the result by the number of entries in the array, and
returns the result as a string with the value rounded to three decimal places.

Notes:
- input is an array of integers
- output is a string value with rounded to 3 (? toFixed(3)) decimal places

Examples:

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

Algorithm:
- reduce the array to the product of its elements
- divide the product by length of the array
- format the number: string + 3 decimal places
- return the string
*/

let multiplicativeAverage = arr => {
  let product = arr.reduce((a, b) => a * b);
  let NUM_OF_ELEMENTS = arr.length;
  let average = String((product / NUM_OF_ELEMENTS).toFixed(3));
  return average;
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"