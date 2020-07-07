/*
Write a function that takes an array of numbers, and returns the sum of the sums 
of each leading subsequence for that array. You may assume that the array always 
contains at least one number.

Notes:
- input is an array of numbers
- output is a sum of sums of each leading subsequence for that array

Examples:

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

Algorithm: 
- generate a list of leadingSubarrays ([index0], [index0, index1], [index0, index1, index2]...)
- transform each leandingSubarray
  - reduce each subarray to the sum of elements 
  (always assign initiate value of the accumulator to 0 to account for arr with 
  len of 1 element)

- reduce the resulting array of sums to the sum of its elements and return it
  (always assign initiate value of the accumulator to 0 to account for arr with 
  len of 1 element)
*/

let leadingSubarrays = arr => {
  return arr
    .map((_, index, arr) => arr.slice(0, index + 1));
}

let toSums = arr => {
  return arr
    .map(subArr => {
      return subArr
        .reduce(((a, b) => a + b), 0);
    })
}

let sumOfSums = arr => {
  let leadingSubArrs = leadingSubarrays(arr);
  let sums = toSums(leadingSubArrs);
  return sums
    .reduce(((a, b) => a + b), 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35