/**
 * Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

Examples:

substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

Notes:
- input is a string
- output is an array of substrings

Algorithm:
- declare a resultArr variable and assign to []
- declare currentSubstr variable and assign to ''
- loop over the string  
  - reassign currentSubstr to += current char
  - push currentSubstr to the resultArr
- return resultArr
 */

// function substringsAtStart(string) {
//   let resultArr = [];
//   let currentSubstr = '';
//   for (let index = 0; index < string.length; index += 1) {
//     currentSubstr += string[index];
//     resultArr.push(currentSubstr);
//   }
//   console.log(resultArr);
// }

function substringsAtStart(string) {
  return string
    .split('')
    .map((_, index, stringArr) => stringArr.slice(0, index + 1).join(''));
}

console.log(substringsAtStart('abc')); // ["a", "ab", "abc"]
console.log(substringsAtStart('a')); // ["a"]
console.log(substringsAtStart('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]