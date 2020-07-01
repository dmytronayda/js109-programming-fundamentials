/*
Write a function that takes a year as input and returns the century.
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. 
So, the years 1901 - 2000 comprise the 20th century.

Notes: 
- input is a number
- output is a string

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Algorithm:
- convert a number to the century
  - century = (number / 100) - Math.floor(number / 100) !== 0
- add appropriate ending based on the last 2 digits
  - make an object look up for 1, 2, 3, 11, 12, 13
  - convert a number to the string of digits
  - slice digits before 2 last digits
  - slice 2 last digits 
  - look up the ending in the object
    - if last 2 digits is one of the keys in the object => return its value 
    - if 1st index digit is one of the keys in the object => return it's value 
    - else return default
  - return slice before 2 last digits + 2 last digits + proper ending
*/

let century = number => {
  let century = toCentury(number);
  return addEnding(century);
}

function toCentury(number) {
  if (((number / 100) - Math.floor(number / 100)) !== 0) {
    return Math.floor(number / 100) + 1;
  }
  return Math.floor(number / 100);
}

function addEnding(number) {
  const ENDINGS = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    11: 'th',
    12: 'th',
    13: 'th',
    default: 'th'
  }
  if (number.toString().length === 1) {
    return number.toString() + ENDINGS[number.toString()] || ENDINGS.default;
  }

  let digitsStr = number.toString();
  let beforeLast2Digits = digitsStr.slice(0, digitsStr.length - 2);
  let last2Digits = digitsStr.slice(digitsStr.length - 2);

  let ending;
  if (ENDINGS[last2Digits] !== undefined) ending = ENDINGS[last2Digits];
  if (ending === undefined &&
    ENDINGS[last2Digits[1]] !== undefined) ending = ENDINGS[last2Digits[1]];
  else {
    ending = ENDINGS.default;
  }

  return beforeLast2Digits + last2Digits + ending;
}

console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(5));           // "1st"
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"