/**
 * Write a function that takes a string argument, 
 * and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. 
 * Ignore characters that are not alphabetic.

Examples:

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

Notes:
- input is a string
- return boolean

Algo: 
- define lower case chars
- loop over the string chars
  - if current char is lower case - return false
 */

// function isLowercaseLetter(char) {
//   return (char >= 'a' && char <= 'z');
// }

// function isUppercase(string) {
//   for (let index = 0; index < string.length; index += 1) {
//     if (isLowercaseLetter(string[index])) {
//       return false;
//     }
//   }
//   return true;
// }

function isUppercase(string) {
  return ! /[a-z]/.test(string);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true