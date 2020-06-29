/**
 * Write a function that takes a string consisting of zero or more space separated words, 
 * and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

Notes: 
- input is a string of words
- output is an object

Algorithm: 
- declare a result object
- split the string to words
- loop over the array of words
  - if object does not have the number representing current word.length as a key
    - assign result[current word.length] to 0
  - else
    - re-assign result[current word.length] to += 1
- return object
 * 
 */

function wordSizes(string) {
  let result = {};
  let words = string.split(' ');
  for (let index = 0; index < words.length - 1; index += 1) {
    if (words[index].length === 0) {
      continue;
    } 
    words[index] = words[index].split('').map(char => char.replace(/ˆ[a-z]/, '')).join('');
    if (result[words[index].length] === undefined) result[words[index].length] = 1;
    else {
      words[index].length += 1;
    }
  }
  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }