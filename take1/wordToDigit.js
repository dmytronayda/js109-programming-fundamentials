/**
 * Notes:
 * - input is a sentense string
 * - return a string with every "number word" converted to a digit
 * 
 * Algorithm:
 * - declare an array of strings with number words
 * - split the sentence on space chars to get words
 * - loop over the array of words
 *   - if word === number word 
 *   - reply word with number word index
 * - return updated array of words joined to string
 */

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  return string
  .split(' ')
  .map(word=> {
    const regex = /[.,;:-]/g;
    word = word.replace(regex, '');
    
    if (NUMBER_WORDS.includes(word)) {
      return NUMBER_WORDS.indexOf(word);
    }
    return word;
  })
  .join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."