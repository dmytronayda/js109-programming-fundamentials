/*
All Substrings
Write a function that returns a list of all substrings of a string.
Order the returned list by where in the string the substring begins.

This means that all substrings that start at position 0 should come first, 
then all substrings that start at position 1, and so on.

Since multiple substrings will occur at each position, 
return the substrings at a given position from shortest to longest.

You may (and should) use the substringsAtStart function
you wrote in the previous exercise:

Example:

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

Algorithm:
- if string.length === 0 => return the string

- initiate the result array
- iterate over the string from 0 (index) to string.length - 1
  - on each iteration slice the string from index to end
  - call substringsAtStart function on a given slice and assing it to leadingSubstrings
  - concat the leadingSubstrings to result

- return result
*/

let substringsAtStart = string => {
  let result = [];
  for (let index = 1; index <= string.length; index += 1) {
    let leadingStr = string.slice(0, index);
    result.push(leadingStr);
  }

  return result;
}

let substrings = string => {
  if (string.length === 0) return string;

  let result = [];
  for (let index = 0; index < string.length; index += 1) {
    let longestSlice = string.slice(index);
    let leadingSubstrings = substringsAtStart(longestSlice);
    result = result.concat(leadingSubstrings);
  }

  return result;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]