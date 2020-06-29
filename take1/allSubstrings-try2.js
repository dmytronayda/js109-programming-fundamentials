/**
 * Write a function that returns a list of all substrings of a string. 
 * Order the returned list by where in the string the substring begins.
 * This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on.
 * Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

You may (and should) use the substringsAtStart function you wrote in the previous exercise:

Example:

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

Algo: 
- initiate a result array
- loop over the array
  - get the longest substring 
  - use leadingSubs function to get the substrings from it
  - reassign substrings array to itself concated with leadingSubs
- return result array
 */

function leadingSubstrings(string) {
  return string
    .split('')
    .map((_, index, stringArr) => stringArr.slice(0, index + 1).join(''));
}

function allSubstrings(string) {
  let substrings = [];
  for (let index = 0; index <= string.length; index += 1) {
    let longestSubstring = string.substring(index);
    substrings = substrings.concat(leadingSubstrings(longestSubstring));
  }
  return substrings;
}

console.log(allSubstrings('abcde'));

