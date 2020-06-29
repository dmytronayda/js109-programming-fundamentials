/**
 * Write a function that returns a list of all palindromic substrings of a string. 
 * That is, each substring must consist of a sequence of characters that reads the same forward and backward. 
 * The substrings in the returned list should be sorted by their order of appearance in the input string.
 * Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; 
that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

Examples:

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

Notes: 
- input is a string
- output is an array of strings which are palidromes

Algorithm:
- get the list of all substrings for the input string
- declare a result array
- loop over the list of substrings
  - define if current string is a palindrome
    - push to the result array

- return result array
 */

function substringsAtStart(string) {
  return string
    .split('')
    .map((_, index, stringArr) => stringArr.slice(0, index + 1).join(''));
}

function substrings(string) {
  let result = [];
  for (let index = 0; index <= string.length; index += 1) {
    let longestSubStr = string.substring(index);
    result = result.concat(substringsAtStart(longestSubStr));
  }
  return result;
}

function isPalindrome(string) {
  return string.length > 1 &&
    string === string.split('').reverse().join('');
}

function palindromes(string) {
  let allSubstrings = substrings(string);
  return allSubstrings.filter(substring => isPalindrome(substring));
}


console.log(palindromes('abcd')); // []
console.log(palindromes('madam')); // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]