/**
 * Notes:
 * - input array 
 * - output filtered array
 *  - includes elements from the original array based on the index starting from 0 index + 2 on each iteration
 * - edge cases: 
 *  - if 1 element in the original array - it gets returned 
 *  - if no elements in the original array - empty arr gets returned
 * 
 * Examples: 
 * console.log(oddities([2, 3, 4, 5, 6])) // [2, 4, 6]
 * console.log(oddities([1, 2, 3, 4, 5, 6]])) // [1, 3, 5]
 * console.log(oddities(['dima', 'naida'])) // ['dima']
 * console.log(oddities([125])) // [125]
 * console.log(oddities([]])) // []
 * 
 * Algorithm:
 * - filter the array elements indices of which can be evenly divided by 2
 * - return result array
 */

function oddities(array) {
  let result = array.filter((element, index) => {
    if ((index % 2 === 0) && (index !== 0)) {
      return element;
    }
  })
  return result;
}

console.log(oddities([2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(oddities(['dima', 'naida', 'ukraine', 'lebedyn', 'married', 'cool'])) // ['ukraine', 'married']
console.log(oddities([125])) // [125]
console.log(oddities([])) // []