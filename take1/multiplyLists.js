/**
 * Write a function that takes two array arguments, each containing a list of numbers, 
 * and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. 
 * You may assume that the arguments contain the same number of elements.

Examples:
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
multiplyList([1, 2],[10, 40]); // [10, 80]

Algorithm:
- input is 2 arrays 
- output is an array
- each number in the 1st array multiply by the number with the same index in the 2nd array 
- return new array
 */

function multiplyList(arr1, arr2) {
  let resultArr = [];
  arr1.forEach((element, index) => {
    resultArr.push(element * arr2[index]);
  });
  return resultArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
console.log(multiplyList([1, 2],[10, 40]));