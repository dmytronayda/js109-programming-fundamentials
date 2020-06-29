/**
 * Notes:
 * - input is a string the consists of some words and some non-alphabetic chars
 * - function returns string with all non-alphabetic chars replaced by spaces
 * - if one or more non-alphabetic chars occur in the row - have only 1 space in the result
 * - result string should never have consecutive spaces
 * 
 * Examples: 
 * console.log(cleanUp("---what's my +*& line?")); // " what's my line "
 * console.log(cleanUp("--what up????")); // " what up "
 * 
 * Algorithm: 
 * - input is a string with non-alphabetic chars
 * - output is a string with spaces that should never have consecutive spaces
 * 
 * - get string with spaces for non-al. chars
 *   - declare an alphabet string
 *   - replace all non-alphabetic chars with spaces
 *   - return as a string
 * 
 * - replace each substring of consecutive spaces with 1 space
 *   - declare a currentChar variable
 *   - declare a result variable
 *   - loop over the string 
 *      - if current index char === currentChar && " "
 *      - result variable + currentChar
 *      - reassign currentChar
 */

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function onlySpaces(string) {
  let noNonAlphabetic = string.split('').map(char => {
    if (alphabet.includes(char)) {
      return char;
    } else {
      return " ";
    }
  });
  return noNonAlphabetic.join('');
}

function cleanUp(string) {
  string = onlySpaces(string);
  let currentChar = "";
  let resultString = "";

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === currentChar && string[index] === " ") {
      currentChar = string[index];
    } else {
      resultString += string[index];
      currentChar = string[index];
    }
  }

  return resultString;
}

console.log(cleanUp("---what's mmmmy +*& line?"));
console.log(cleanUp("--what up????")); // " what up "