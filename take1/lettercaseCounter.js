/**
 * Write a function that takes a string and returns an object containing three properties: 
 * one representing the number of characters in the string that are lowercase letters,
 * one representing the number of characters that are uppercase letters, 
 * and one representing the number of characters that are neither.

Examples:

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

Algorithm:
- initiate a result object
- count lowercase chars
  - initiate the counter
  - loop over the string chars 
    - use regex.test to define if its an lowercase char
      - increase the counter
  - update result object
  
- count uppercase chars
  - initiate the counter
  - loop over the string chars 
    - use regex.test to define if its an uppercase char
      - increase the counter
  - update result object

- count the rest of chars
  - deduct sum of upper and lowercase chars from string length
  - update the result object

- return updated object
 */

function countChars(regex, string) {
  let counter = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (regex.test(string[index])) {
      counter += 1;
    }
  }
  return counter;
}

function letterCaseCount(string) {
  let lowercaseCharsCount = countChars(/[a-z]/, string);
  let uppercaseCharsCount = countChars(/[A-Z]/, string);
  let neither = string.length - lowercaseCharsCount - uppercaseCharsCount;
  
  return {
    lowercase : lowercaseCharsCount,
    uppercase : uppercaseCharsCount,
    neither : neither
  }
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }