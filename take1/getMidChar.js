/**
 * Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. 
 * If the string has an odd length, you should return exactly one character. 
 * If the string has an even length, you should return exactly two characters.

Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

Notes: 
-input - string
-output - string 1 or 2 chars

Algorithm:
- calculate the middle index 
  - if not integer - return Math.floor(index)
  - return 2 chars
- return 1 char 
 */

let centerOf = string => {
  let midIndex = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    return string.slice(midIndex - 1, midIndex + 1);
  }
  return string[midIndex];
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launchs'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"