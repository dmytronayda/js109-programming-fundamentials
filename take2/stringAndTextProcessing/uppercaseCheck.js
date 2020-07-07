/*
Uppercase Check

Write a function that takes a string argument, and returns true if all of the 
alphabetic characters inside the string are uppercase; false otherwise. 

Ignore characters that are not alphabetic.

Notes:
- input is a string
- output is a boolean if every letter char is uppercase

Examples:

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

Algorithm: 
- iterate over the characters of the string
  - check if char is a uppercase letter char
    - define a regex
    - use test method 
    - if not uppercase => return false
- return true
*/

let regEx = /[A-Z]/;

let isUppercase = str => {
  return !regEx.test(str);
}

console.log(isUppercase('TrUE'));