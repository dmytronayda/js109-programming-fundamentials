/**
 * Notes:
 * - input is a string 
 * - output is an array or strings where every string contains a word from the original string followed by a space and a word.length
 * 
 * wordLengths("Dima will pass JS109"); // ["Dima 4", "will 4", "pass 4", "JS109 5"]
 * 
 * Algorithm:
 * - split the string into an array of words
 * - map each word to the word concat space and word.length
 * - return the array
 */

function wordLengths(string) {
  if (string === undefined || string.length < 1) return [];
  return string
  .split(" ")
  .map(word => word + " " + word.length);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []