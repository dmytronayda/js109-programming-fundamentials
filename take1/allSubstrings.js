/**
 * Write a function that returns a list of all substrings of a string. 
 * Order the returned list by where in the string the substring begins. 
 * 
 * This means that all substrings that start at position 0 should come first, 
 * then all substrings that start at position 1, and so on. 
 * Since multiple substrings will occur at each position, 
 * return the substrings at a given position from shortest to longest.

You may (and should) use the substringsAtStart function you wrote in the previous exercise:

Example:

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

Notes:
- input is a string
- output is an array

Algorithm:
- convert a string to the array of chars
- declare a result array
- for each character in the strArr
  - loop over the array
    - map it to the substring from 0 to currentIndex + 1
    - push all substrings from current element to the end of array to the result arr
- return resultArr
 */

// function substrings(string) {
//   let resultArr = [];
//   let strArr = string.split('');
  
//   for (let index = 0; index < strArr.length; index += 1) {
//     for (let endIdx = index + 1; endIdx <= strArr.length; endIdx += 1) {
//       resultArr.push(strArr.slice(index, endIdx).join(''));
//     }
//   }
//   return resultArr;
// }

// console.log(substrings('abcde'));

function substringsAtStart(string) {
  return string
    .split('')
    .map((_, index, stringArr) => stringArr.slice(0, index + 1).join(''));
}

/**
 * Algo:
 * - declare resultArr variable
 * - loop over the string
 * - get the loongest string in the array index 
 *    - get the substring from 0 to currentIndex
 * - using substringAtStart function get all substrings for currently longest string
 * - concat substrings to the resultArr
 * - return resultArr
 */

function substrings(string) {
  let result = [];
  for(let index = 0; index <= string.length; index += 1) {
    let longestSubStr = string.substring(index);
    result = result.concat(substringsAtStart(longestSubStr));
  }
  return result;
}


console.log(substrings('dima'));