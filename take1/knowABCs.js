/**
 * Notes:
 * - input is a string
 * - return boolean true if the word can be spelled using the set of blocks
 * - input word should not use both letters from a given block
 * - block can be used only once
 * 
 * Examples:
 * isBlockWord('Butch'); // false because h and u chars are used in one word
 * 
 * Algorithm:
 * - declare a rules array of subarrays
 * - if word.length is > 12 return false
 * - loop over the input word characters
 *   - convert current char to the lower case
 *   - loop over the spelling blocks
 *     - if spelling block includes char
 *       - remove the spelling block
 *       - continue to next iteration
 *     - else return false
 */

let SPELLING_BLOCKS = [
  'bo',
  'gt',
  'vi',
  'xk',
  're',
  'ly',
  'dq',
  'fs',
  'zm',
  'cp',
  'jw',
  'na',
  'hu',
];

function isBlockWord(word) {
  let wordArr = word.toLowerCase().split('');
  for (let index = 0; index < wordArr.length; index += 1) {
    let match = SPELLING_BLOCKS.filter(block => block.includes(wordArr[index]))[0];
    if (match === undefined) return false;
    SPELLING_BLOCKS.splice(SPELLING_BLOCKS.indexOf(match), 1);
  }
  return true;
}

console.log(isBlockWord('BUTCH'));