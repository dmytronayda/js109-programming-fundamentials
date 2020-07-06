/*
Multiply Lists
Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array that contains the product of each pair of numbers from the
arguments that have the same index. You may assume that the arguments contain 
the same number of elements.

Notes:
- input is 2 array arguments
- output is 1 array that contains products of each pair of numbers

Example:

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

Algorithm:
- map each element from the arr1 with same index element from the arr2 
  - multiply 2 elements
- return new array 
*/

let multiplyList = (arr1, arr2) => {
  return arr1.map((element, index) => {
    let arr1Elem = element;
    let arr2Elem = arr2[index];

    return arr1Elem * arr2Elem;
  })
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]