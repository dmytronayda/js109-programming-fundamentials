/**
 * Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.
 * 
 * Notes: 
 * - input is an integer number
 * - return boolean
 * 
 * Examples:
 * console.log(isPalindromicNumber(12321)); // true
 * console.log(isPalindromicNumber(1277821)); // false
 * console.log(isPalindromicNumber(12124)); // false
 * 
 * Algorithm:
 * - check if number is palindrome
 *    - convert an input number to string
 *    - convert string to array of chars, reverse array, join array of char on '' to make a reversed string
 *    - compare input string and reversed string
 * - return the boolean value
 */

function isPalindromicNumber (number) {
  let string = number.toString();
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

// console.log(isPalindromicNumber(12321)); // true
// console.log(isPalindromicNumber(1277821)); // false
// console.log(isPalindromicNumber(12124)); // false

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true