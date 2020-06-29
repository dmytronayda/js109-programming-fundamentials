/**
 * Problem:
 * Write a function that takes a string consisting of zero or more space separated words, 
 * and returns an object that shows the number of words of different sizes.
 * 
 * Words consist of any sequence of non-space characters.
 * 
 * Notes:
 * - input is a string of words
 * - output is an object
 * 
 * Examples: 
 * console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
 * console.log(wordSizes('Dima is an awesome man who cares for his family.'));  // { "2": 2, "3": 4, "4": 1, "5": 1, "6": 1, "7": 1}
 * 
 * Algorithm: 
 * - declare a result object
 * - split a string to individual words
 * - loop over array of words
 *   - declare wordSize variable and assign it to the length of the current word
 *   - if wordSize is 0 jump to the next word in the array
 *   - if current word is not in the result array yet, set it to zero
 *   - reassign the value of the property to += 1
 * - return result object
 */

function wordSizes(string) {
  let result = {};
  let arrayOfWords = string.split(' ');

  for (let index = 0; index < arrayOfWords.length; index += 1) {
    let wordSize = arrayOfWords[index].length;
    if (wordSize === 0) {
      continue;
    }
    if (!result[wordSize]) {
      result[wordSize] = 0;
    }

    result[wordSize] += 1;
  }

  return result;
}

console.log(wordSizes('Dima is an awesome man who cares for his family.'));  // { "2": 2, "3": 4, "4": 1, "5": 1, "6": 1, "7": 1}
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }