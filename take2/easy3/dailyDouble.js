/*
Write a function that takes a string argument and returns a new string that contains 
the value of the original string with all consecutive duplicate characters collapsed into a single character.

Notes:
- input is a string
- output is a string where all consecutive duplicate chars collapsed into a single char

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Algorithm:
- declare result variable and assign it to an empty string
- iterate over the string characters
  - if currentChar value is not same as last char value of the result string
  - result string concat currentChar
- return result
*/

const crunch = string => {
  let result = '';
  string.split('').forEach(char => {
    if (result[result.length -1] !== char) {
      result += char;
    } 
  })
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""