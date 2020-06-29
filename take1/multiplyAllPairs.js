/**
 * Write a function that takes two array arguments, each containing a list of numbers,
 * and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. 
 * 
 * The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Example:

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

Notes:
- input is 2 arrays of numbers
- output is 1 array of products

Algo:
- declare a resultArr variable and assign to empty array
- loop over the 1st array elements
  - loop over the second array elements
    - multiply current element from the 1st array by the current element of the 2nd array
    - push product to the resultArr
- sort array in ascending numerical order
- returned sorted array
 */

function multiplyAllPairs(arr1, arr2) {
  let resultArr = [];
  arr1.forEach(elem1 => {
    arr2.forEach(elem2 => {
      resultArr.push(elem1 * elem2);
    })
  })
  return resultArr.sort((a, b) => a - b);
}
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]