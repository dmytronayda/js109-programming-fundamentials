/**
 * Write a function that takes a word and a string of text as arguments, 
 * and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided.

Example:

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3

Examples: 
let text = "Hello, today is a beautiful day. How is it going for you? Hello? Can you hear me? Hello!"
searchWord("hello", text); // 3

Notes: 
- input is a string
- output is an integer number

Algorithm:
- delcare a regex with searchWord
- match all instances of the search word
- return matches.length or 0
 */

// function searchWord(searchWord, text) {
//   return text
//   .split(" ")
//   .filter(word => {
//     if (word.toLowerCase() === searchWord.toLowerCase()) return word;
//   })
//   .length
// }

// function searchWord(searchWord, text) {
//   let regex = new RegExp(searchWord, 'gi');
//   return text
//   .split(" ")
//   .map(word => {
//     if (regex.test(word)) return `**${word.toUpperCase()}**`;
//     return word;
//   })
//   .join(' ');
// }

function searchWord(searchWord, text) {
  let regex = new RegExp(searchWord, 'gi');
  return text.replace(regex, `**${searchWord.toUpperCase()}**`)
}
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text)); // 4

let text2 = "Hello, today is a beautiful day. How is it going for you? Hello? Can you hear me? Hello"
console.log(searchWord("Hello", text2)); // 3