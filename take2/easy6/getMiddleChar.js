/*
Get The Middle Character
Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. 
If the string has an odd length, you should return exactly one character. 
If the string has an even length, you should return exactly two characters.

Notes:
- input is a string
- output is a char in the middle
  - odd length => one char
  - even length => 2 chars

Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
centerOf('abcd');              // "bd"

Algorithm: 
- get the middle char index
  - Math.floor(len / 2) 
- if len / 2 === 0 => return slice from middle to middle + 2 : return mid char index value
*/

let centerOf = str => {
  let middleIdx = Math.floor(str.length / 2);

  return str.length % 2 === 0 ? str.slice(middleIdx - 1, middleIdx + 1) : str[middleIdx];
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
console.log(centerOf('abcd'));              // "bc"