/*
Write a function that takes a sentence string as an argument, and returns that
string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 
'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding 
digit character.

Example:

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

- input is a string
- output is a string with number words converted to digits

Algorithm:
- split the string to the array of words
- iterate over the words - transformation
  - if word === NUMBER_WORD index value => return index
  - if word.split on punctuationRegex === NUMBER_WORD index value => return index + punctuation
  - return word
- join the string back
*/

let punctuationOnEnd = word => {
  let punctuation = /[^a-z]/gi;
  let lastIdx = word.length - 1;
  if (punctuation.test(word[lastIdx])) {
    return true;
  } else {
    false;
  }
}  
const NUMBER_WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

let wordToDigit = string => {
  let words = string.split(' ');
  return words
    .map(word => {
      if (NUMBER_WORD.includes(word)) {
        return NUMBER_WORD.indexOf(word);
      } else if (punctuationOnEnd(word)) {
        let lastIdx = word.length - 1;
        let punctuation = word[lastIdx];

        let wordStr = word.slice(0, lastIdx);
        if (!NUMBER_WORD.includes(wordStr)) return word;
        return NUMBER_WORD.indexOf(wordStr) + punctuation;
      } else {
        return word;
      }
    })
    .join(' ');
}

console.log(NUMBER_WORD.indexOf('five'));

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."