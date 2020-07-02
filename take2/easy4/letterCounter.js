/*
Letter Counter (Part 1)
Write a function that takes a string consisting of zero or more space separated words, 
and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Notes:
- input is a string of words
- return an object that shows the number of words of different sizes

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

Algorithm:
- validate that string is not an empty string
- declare a result variable and assign it to an empty object

- split the string to individual words

- iterate over the words
  - if object property with current word length is not undefined 
    - increment the value by 1
  - else assign current word length as a new prop name with value of 1

- return the result object
*/

let wordSizes = string => {
  if (string.length === 0) return {};
  let result = {};

  let words = string.split(' ');

  words.forEach(word => {
    result[word.length] = result[word.length] + 1 || 1;
  })

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}