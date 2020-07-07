/*
Write a function that takes a string as an argument, and returns that string 
with every lowercase letter changed to uppercase and every uppercase letter 
changed to lowercase. Leave all other characters unchanged.

Examples:

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

Notes:
- input is a string
- output is a string with swapped case chars

Algorithm
- convert a string to the array of chars
- iterate over the array char (transformation)
  - if char isLowercase = uppercase it
  - else => lowercase it
- join the array of updated chars back to string
*/

let isLowercase = char => /[a-z]/.test(char);

let swapCase = str => {
  return str
    .split('')
    .map(char => {
      if (isLowercase(char)) return char.toUpperCase();
      else {
        return char.toLowerCase();
      }
    })
    .join('');
}

console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"