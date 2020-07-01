/*
Palindromic Strings (Part 1)
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise.
A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.


Notes: 
- input is a string
- output is a boolean

Examples:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

Algorithm:
- reverse the input string
  - split to make an array -> reverse -> join to make a string
- return input === reversed
*/

let isPalindrome = string => {
  let reversed = string.split('').reverse().join('');
  return string === reversed;
}


console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true