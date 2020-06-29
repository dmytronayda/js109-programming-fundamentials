/**
 * Notes:
 * - input: 2 arrays
 * - output: 1 array from both arrays with each element taken in alternation
 * 
 * Examples: 
 * interleave([1, 2, 3], ['a', 'b', 'c']);  // [1, "a", 2, "b", 3, "c"]
 * interleave([0, 2, 3, 8], ['a', 'b', 'c', 10]);  // [0, "a", 2, "b", 3, "c", 8, 10]
 * 
 * Algorithm: 
 * - check that both arrays are same length
 * - declare the result array
 * - initiate a loop that goes from 0 to end of the 1st array
 *   - on each iteration push 1 element from 1st array and then 1 element from the second array to the result array
 * - return result array
 */

function interleave(arr1, arr2) {
  let resultArr = [];
  arr1.forEach((element, index) => {
    resultArr.push(element, arr2[index]);
  })

  return resultArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));  // [1, "a", 2, "b", 3, "c"]
console.log(interleave([0, 2, 3, 8], ['a', 'b', 'c', 10]));  // [0, "a", 2, "b", 3, "c", 8, 10]