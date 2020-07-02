/*
Letter Counter (Part 2)
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. 
For instance, the word size of "it's" is 3, not 4.

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

Algorithm: 
- replace all non-alphanumeric char in the string by '' chars
  - using regex and replace method
- invoke wordSizes function on the updated string
*/

let wordSizes = string => {
  if (string.length === 0) return {};

  string = string.replace(/[^a-z0-9|\s]/gi, '');
  let result = {};

  let words = string.split(' ');

  words.forEach(word => {
    result[word.length] = result[word.length] + 1 || 1;
  })

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
