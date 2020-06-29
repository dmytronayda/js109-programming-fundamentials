/**
 * Notes: 
 * - input is a string
 * - output is a boolean
 * - palindrome is a word that reads the same forwards and backwords (e.g. dad, madam, etc.)
 * 
 * Examples: 
 * palindrome("madam"); // true
 * palindrome("Madam"); // false 
 * 
 * Algorithm: 
 * - check if reversed string === string 
 * 
 * removeNonAlphanumericChars 
 * - declare a result string 
 * - loop over the string chars 
 *    - if character is a number of a character is a letter - concatinate to result array
 * - return result string
 */

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

let removeNonAlphanumericChars = string => {
  let lowerCaseString = string.toLowerCase();
  let resultString = "";
  for (let index = 0; index < lowerCaseString.length; index += 1) {
    if (isNumber(lowerCaseString[index]) || isLetter(lowerCaseString[index])) {
      resultString += lowerCaseString[index];
    }
  }
  return resultString;
}

let isPalindrome = string => {
  let cleanString = removeNonAlphanumericChars(string);
  let reversedString = cleanString.split('').reverse().join('');
  return reversedString === cleanString;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("356653"));
console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome("356a653"));