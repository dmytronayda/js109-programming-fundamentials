/**
 * Notes: 
 * input: 2 arrays 
 * output: 1 arrays that contains the union of values from the two
 *    - union means that only unique values are in the final array / no dupblicate values
 * 
 * Examples: 
 * union([1, 2, 3, 4], [1, 5 ,6, 7]); // [1, 2, 3, 4, 5, 6, 7]
 * union([1, 2, 3, 4], [8]); // [1, 2, 3, 4, 8]
 * union([1, 2, 3, 4], [1, 2, 2, 2, 3]); // [1, 2, 3, 4]
 * 
 * Algorithm: 
 * - declare a result array
 * - loop over the 1st array
 *   - declare current value variable
 *   - filter second array values so it does not include current value and reassign second array to the filtered array
 * - merge 2 arrays
 */

function union(arr1, arr2) {
  let resultArr;
  for (let index = 0; index < arr1.length; index += 1) {
    let currentVal = arr1[index];
    arr2 = arr2.filter(element => element !== currentVal);
  }
  return resultArr = arr1.concat(arr2);
}

console.log(union([1, 2, 3, 4], [1, 2, 2, 2, 3]));
console.log(union([1, 2, 3, 4], [1, 5 ,6, 7]));
console.log(union([1, 2, 3, 4], [8]));