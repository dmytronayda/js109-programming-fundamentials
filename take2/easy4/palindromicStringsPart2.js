/*
Palindromic Strings (Part 1)
his time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters.
If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Examples:

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

Algorithm: 
- convert all letters to lowercase
- replace all non-letter chars with empty string
- call isPalindrome function from previous part on the string
*/

let isPalindrome = string => {
  let reversed = string.split('').reverse().join('');
  return string === reversed;
}


let isRealPalindrome = string => {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrome(string);
}


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false