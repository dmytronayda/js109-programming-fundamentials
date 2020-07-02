/*
Palindromic Numbers
Write a function that returns true if its integer argument is palindromic, or false otherwise.
A palindromic number reads the same forwards and backwards.

Notes:
- input is an integer
- output is boolean if int is a palidnrome and false otherwise

Examples:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

Algorithm:
- convert an int into the string 
- convert a string into the array, reverse, and convert again to string
- if stringInt = stringof reversed int return true and false otherwise
*/

let isPalindromicNumber = int => {
  let numString = int.toString();
  let reversedNum = numString.split('').reverse().join('');

  return numString === reversedNum;
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true