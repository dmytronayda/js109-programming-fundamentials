/*
Leading Substrings
Write a function that takes a string argument, and returns a list of all substrings 
that start from the beginning of the string, ordered from shortest to longest.

Notes:
- input is a string
- output is an array of strings
  - start from the index 0 of a string ordered from shortest to longest

Examples:

substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

Algorithm:
- if len of the string is 0 - return the string

- initiate the result array
- loop over the string from 1 to str.length
  - slice the string from 0 to index
  - push it to the result array

- return result array
*/

// let substringsAtStart = string => {
//   if (string.length === 0) return string;

//   let result = [];
//   for (let index = 1; index <= string.length; index += 1) {
//     let leadingStr = string.slice(0, index);
//     result.push(leadingStr);
//   }

//   return result;
// }

let substringsAtStart = string => {
  return string
    .split('')
    .map((_, index, strArr) => strArr.slice(0, index + 1).join(''));
}


console.log(substringsAtStart('abc'));   // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));     // ["a"]
console.log(substringsAtStart('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]