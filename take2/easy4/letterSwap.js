/*
Letter Swap
Given a string of words separated by spaces, 
write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, 
and that the string will always contain at least one word. 
You may also assume that each string contains nothing but words and spaces, 
and that there are no leading, trailing, or repeated spaces.

Notes:
- input is a string of words
- output is the string of words where every words 0th index and last index are swapped

Examples:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

Algorithm:
- convert a string to a array of words
- iterate over the array and trasform each word
  - swap first char to the last char
- convert updated array to string and return it
*/

let swap = string => {
  let words = string.split(' ');
  return words
    .map(word => {
      return swapChars(word);
    })
    .join(' ');
}

function swapChars(word) {
  if (word.length === 1) return word;

  let lastChar = word[word.length - 1];
  let firstChar = word[0];
  let middlePart = word.slice(1, word.length - 1);

  word = lastChar + middlePart + firstChar;
  return word;
}

console.log(swap('Oh what a wonderful day it is')); // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                         // "ebcdA"
console.log(swap('a'));                             // "a"