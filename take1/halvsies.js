/**
 * Notes:
 * - input is an array
 * - output is an array with two arrays [[], []]
 * 
 * Examples: 
 * halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
 * halvsies([1, 2, 3]); // [[1, 2], [3]]
 * halvsies([5]); // [[5], []]
 * 
 * Algorithm:
 * - find the middle index for the input array
 *  - if length is not even => increase the Math.floor-ed middle index by 1
 * - declare a result array
 * - slice a part of the input array from 0 to middle index + 1 and push to the result array
 * - slice a part of the input array from mid index + 1 and push to the result array
 * - return result
 */

function halvsies(array) {
  let midIndex = array.length / 2;
  if (array.length % 2 === 1) {
    midIndex = Math.floor(midIndex) + 1;
  }
  let resultArr = [];
  resultArr.push(array.slice(0, midIndex));
  resultArr.push(array.slice(midIndex));
  return resultArr;
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 2, 3, 'hello', 'whatup']));
console.log(halvsies([1, 2, 3]));
console.log(halvsies([1, 2, 3]));
console.log(halvsies([]));