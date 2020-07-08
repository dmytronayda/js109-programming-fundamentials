/*
Lettercase Percentage Ratio
Write a function that takes a string, and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Notes:
- input is a string
- output is an object
  - {lowercase: "percentage",
    uppercase: "percentage",
    neither: "percentage"}

Examples:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Algorithm:
- get lowercase letters
  - ? regex match
- get uppercase letters
- get rest

- convert each percentage to a properly formatted string

- return object 
*/

let lowerCaseLetterCount = str => {
  let matches = str.match(/[a-z]/g);
  return matches ? matches.length : 0;
}

let upperCaseLetterCount = str => {
  let matches = str.match(/[A-Z]/g)
  return matches ? matches.length : 0;
}

let neitherCharCount = str => {
  let lower = lowerCaseLetterCount(str);
  let upper = upperCaseLetterCount(str);
  return str.length - lower - upper;
}

let percentage = (caseLen, strLen) => {
  let caseLenPercetage = ((caseLen / strLen) * 100).toFixed(2);
  let formatted = caseLenPercetage.toString();
  return formatted;
}

function letterPercentages(str) {
  let stringLen = str.length;
  return {
    lowercase : percentage(lowerCaseLetterCount(str), stringLen),
    uppercase : percentage(upperCaseLetterCount(str), stringLen),
    neither : percentage(neitherCharCount(str), stringLen)
  }
}

console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));
console.log(letterPercentages('abCdef 123'));