/**
 * Write a function that takes an array of numbers, 
 * and returns an array with the same number of elements, with each element's value being the running total from the original array.
 * 
 * running total = 0 = same value, 1element = 0 + 1 sum, 2index element 0 + 1 + 2
 * 
 * Notes: 
 * - input is an array
 * - output is an array
 * 
 * Examples 
 * console.log(runningTotal([1, 2, 3])); // [1, 3, 6]
 * console.log(runningTotal([5, 7, 19, 1])); // [5, 12, 36, 54]
 * 
 * Algorithm: 
 * - initiate the result array
 * - initiate runningTotalElem variable = 0
 * - loop over the array
 *   - on each iteration reassign runnning total += to current element
 *   - push runningTotalElem to result array
 * - return the result array
 */

function runningTotal(array) {
  let runningTotal = 0;
  let resultArr = array.map(element => {
    runningTotal += element;
    return runningTotal;
  })
  return resultArr;
}

console.log(runningTotal([1, 2, 3])); // [1, 3, 6]
console.log(runningTotal([5, 7, 19, 1])); // [5, 12, 31, 32]

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []