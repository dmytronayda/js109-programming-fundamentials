/**
 * Notes:
 * - input: unordered array
 * - output: 1 value that occurs twice
 * 
 * Examples: 
 * findDup([1, 2, 4, 1]); // 1
 * findDup([1, 2, 4, 65, 66, 80, 78, 78, 90, 91, 92, 99]); // 78
 * 
 * Algorithm
 * - declare a dup variable;
 * - loop over the array
 *   - filter the array so that return arr includes only elements that are the same value as current element
 *   - if filtered array.length is > 1 reassign duplicate variable to current element
 * - return dup variable
 */

function findDup(array) {
  let duplicate;
  for(let index = 0; index < array.length; index += 1) {
    let filteredArr = array.filter(element => element === array[index]);
    if (filteredArr.length > 1) {
      duplicate = filteredArr[0];
    }
  }
  return duplicate;
}

console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
   7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));