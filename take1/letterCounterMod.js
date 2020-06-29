/**
 * Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. 
 * For instance, the word size of "it's" is 3, not 4.
 * 
 * Notes: 
 * - letters are between not less than a not bigger than z 
 * - ints are not less than 0 and not bigger than 9
 * 
 * Examples: 
 * - split the string to array on space (' ')
 * - initiate the result object
 * - loop over the individual words
 * - get the word length correct
 *   - convert word string to array of chars
 *   - loop through word chars and remove chars that are not letters or numbers
 *   - return array length
 * - if wordLen is 0 => jump to next iteration
 * - if wordLen is not in the result object yet => set the property result[len] = 0
 * - increment result[len] by one
 * 
 * - return object
 */


function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

function cleanWord(string) {
  let wordArr = string.toLowerCase().split('');
  let cleanWord = wordArr.filter(element => {
    return (isLetter(element) || isNumber(element));
  });
  return cleanWord.join('');
}


function wordSizes(string) {
  let arrayOfWords = string.split(' ');
  let result = {};

  for (let index = 0; index < arrayOfWords.length; index += 1) {
    let word = arrayOfWords[index];
    let clean = cleanWord(word);

    if (clean.length === 0) {
      continue;
    }

    if (!result[clean.length]) {
      result[clean.length] = 0;
    }
    result[clean.length] += 1;
  }

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));  