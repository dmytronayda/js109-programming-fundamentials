/**
 * Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. 
 * All five-or-more letter words should have their letters in reverse order. 
 * The string argument will consist of only letters and spaces. Words will be separated by a single space.

Examples:

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

Notes: 
- input is a string
- output is a string with reversed words that are 5+ chars long

Algorithm:
- convert a string to the array of words
- reverse each word which length is over 4 chars
  - loop over each element
  - depending on it's length concat to the result string
- return array joined on a space char
 */

let reverseWords = string => {
  return string.split(' ').map(element => {
    if (element.length > 4) {
      return element.split('').reverse().join('');
    } else {
      return element;
    }
  }).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Dima Launch School'));            // "Dima hcnuaL loohcS"
