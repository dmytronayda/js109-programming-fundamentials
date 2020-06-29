/**
 * Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

Examples:

substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

Algo:
- split string to the array of individual chars
- map each character with slice of the array from 0th index to the current char that is joined to create a string
- return array of strings
 */

function substringsAtStart(string) {
  return string.split('')
    .map((_, index, strArr) => strArr.slice(0, index + 1).join(''));
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]