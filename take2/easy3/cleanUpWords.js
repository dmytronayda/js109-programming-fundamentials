/*
Given a string that consists of some words and an assortment of non-alphabetic characters, 
write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, you should only have one space in the result 
(i.e., the result string should never have consecutive spaces).

Notes:
- input is a string that consists of words and non-alphabetic chars
- output is a string with all non-alphabetic chars replaced by spaces

Example:

cleanUp("---what's my +*& line?");    // " what s my line "

Algorithm:
- convert a string to the array of chars
- iterate over the chars
  - if char is non-alphabetic char = return space 
  - else return char as is
- convert consecutive spaces to 1 space
  - initiate a result string
  - iterate over the array of chars
  - if result string is an empty string => concat 1st char and continue to next iteration
  - if last char of the result string and value of the current index equal to charToRemove => continue to the next iteration
  - else concat current char to the result string 
  - return result string
- return cleaned string
*/

let cleanUp = string => {
  let stringArr = string.split('');
  const ALPHABETIC_CHAR = /[a-z]/i;
  const SPACE = ' ';

  let arrWithConsecSpaces = stringArr
    .map(char => {
      if (ALPHABETIC_CHAR.test(char)) return char;
      else {
        return SPACE;
      }
    });

  return removeConsec(arrWithConsecSpaces, SPACE);
}

function removeConsec(array, charToRemove) {
  let result = '';
  for (let index = 0; index < array.length; index += 1) {
    if (result === '') {
      result += array[index];
      continue;
    };
    if (result[result.length - 1] === charToRemove &&
      array[index] === charToRemove) continue;
    result += array[index];
  }

  return result;
}

console.log(cleanUp("---WHat's my +*& line?")); // " WHat s my line "

// Alternative solution with regEx

let cleanThisUp = string => {
  return string
    .replace(/[^a-z]/gi, ' ')
    .replace(/\s+/gi, ' ');
}

console.log(cleanThisUp("---WHat's my +*& line?")); // " what s my line "