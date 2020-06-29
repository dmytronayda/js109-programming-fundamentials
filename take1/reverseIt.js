/**
 * Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

Examples:

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

Notes:
- input is a string
- output is a string with words in reverse order

Algorithm:
- convert a string to arr of words
- return joined to string reversed array
 */

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"