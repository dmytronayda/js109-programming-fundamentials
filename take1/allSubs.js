/**
 * Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

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
- output is an array of strings

Algorithm:
- initiate a resultArr var
- declare currentSubstring var
- loop over the string from 0 to last elem
    - reassign the value of the currentSbustring to the currentSubstring + current char value
    - push currentSubstring to result array
- return resultArr
 */

function allSubstrings(string) {
  let results = [];
  let currentSubstring = '';
  for (let idx = 0; idx < string.length; idx += 1) {
      currentSubstring += string[idx];
      results.push(currentSubstring);
  }
  return results;
}

console.log(lead('abcde'));