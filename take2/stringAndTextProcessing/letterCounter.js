/*
Lettercase Counter
Write a function that takes a string and returns an object containing three 
properties: one representing the number of characters in the string that are 
lowercase letters, one representing the number of characters that are uppercase 
letters, and one representing the number of characters that are neither.

Examples:

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

Algorithm:
- initiate the result object
- iterate over the string chars
  - if char isLowercase => increment result["lowercase"] by 1
  - if char isUppercase => increment result["uppercase"] by 1
  - else => increment result["neither"] by 1
- return result object
*/

let uppercaseRegEx = /[A-Z]/;
let lowercaseRegEx = /[a-z]/;

let isLowercase = char => lowercaseRegEx.test(char);
let isUppercase = char => uppercaseRegEx.test(char);

let letterCaseCount = str => {
  let result = {lowercase: 0, uppercase: 0, neither: 0};
  if(str.length === 0) return result;

  str
    .split('')
    .forEach(char => {
      if (isLowercase(char)) result['lowercase'] += 1;
      else if (isUppercase(char)) result['uppercase'] += 1;
      else {
        result['neither'] += 1;
      }
    })
  
  return result;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }