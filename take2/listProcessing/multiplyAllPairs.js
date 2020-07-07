/*
Multiply All Pairs

Write a function that takes two array arguments, each containing a list of numbers,
and returns a new array containing the products of all combinations of number pairs 
that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Notes:
- input is 2 arrays
- output is 1 array

Example:

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

Algorithm: 
- iterate over each element in the arg1 array
  - iterate over each element in the arg2 array
    - push product of multiplication arg1[index] * arg2[current index]
- return sorted array
*/

let multiplyAllPairs = (arr1, arr2) => {
  let result = [];
  arr1.forEach(number1 => {
    arr2.forEach(number2 => {
      result.push(number1 * number2);
    })
  })
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]