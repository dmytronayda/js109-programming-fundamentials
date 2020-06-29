/**
 * Notes:
 * - input is a string
 * - output is a longest string and its word count
 * 
 * - words are separated by spaces
 * - sentences are separated by [".", "!", "?"]
 * 
 * Algorithm: 
 * 
 * - split the string into sentences! 
 *    - replace [ "!", "?"] by "."
 *    - split string on periods
 * 
 * - declare longestSentence variable and assign to empty string
 * - declare longestSentenceLength variable and assign to 0
 * - loop over the array of sentences 
 *   - compare the length of current sentence to the longestSentenceLength
 *   - if length is larger, reassign longestSentence
 * - print to the console the longest sentence and its length
 */

function toSentences(string) {
  return string.match(/\w.*?[.!?]/g);
}

function longestSentence(string) {
  let longestSentence = '';
  let longestSentenceLength = 0;
  let sentences = toSentences(string);
  sentences.forEach(sentence => {
    if (sentence.split(' ').length > longestSentenceLength) {
      longestSentence = sentence;
      longestSentenceLength = sentence.split(' ').length;
    }
  });
  console.log(`${longestSentence}\nThe longest sentence has ${longestSentenceLength} words.`);
}

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.