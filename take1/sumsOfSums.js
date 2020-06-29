/**
 * Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. 
 * You may assume that the array always contains at least one number.

Examples:

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

Algo:
- initiate sum
- loop over array
  - on each iteration reduce to sum of elements for the slice of the array from 0 to current element + 1
  - reassign sum to += reduce sume from previous step
- return sum
 */

function sumOfSums(array) {
  let sum = 0;
  array.forEach((_, index) => {
    let currentSum = array.slice(0, index + 1).reduce((a, b) => a + b);
    sum += currentSum;
  })
  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35