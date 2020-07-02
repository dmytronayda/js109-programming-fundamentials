/*
Running Totals
Write a function that takes an array of numbers, and returns an array with the same 
number of elements, with each element's value being the running total from the original array.

Notes:
- input is an array of nums
- output is an array of the same length with each element transformed to the running total

Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

Algorithm: 
- initiate the result array
- iterate over the array from 0 to length of the array 
  - on each iteration slice part of the array 
  - get the sum of the elements in current slice
  - push the sum to the result array
- return result array
*/

let runningTotal = array => {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    let currentSlice = array.slice(0, index + 1);
    let runningSum = currentSlice.reduce(((a, b) => a + b), 0);
    result.push(runningSum);
  }
  
  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []