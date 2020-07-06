/*
Double Char (Part 2)
Write a function that takes a string, doubles every consonant character in the string, 
and returns the result as a new string. 
The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Notes:
- input is a string
- output is a string with every consonant (not vowel) char doubled

Examples:

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

Algorithm: 
- define a consonant regEx
- loop over the string chars
  - if char is consonant (? regEx.test(char)) => double it
- return updated string
*/

let regExLetters = /[a-z]/i;
let regExConsonants = /[^aeiou]/i;

let doubleConsonants = string => {
  return string
    .split('')
    .map(char => {
      if (regExLetters.test(char) && regExConsonants.test(char)) {
        return char.repeat(2);
      } else {
        return char;
      }
    }).join('')
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""