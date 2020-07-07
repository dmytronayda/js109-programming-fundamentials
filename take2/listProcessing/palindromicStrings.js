/*
Palindromic Substrings

Write a function that returns a list of all palindromic substrings of a string. 
That is, each substring must consist of a sequence of characters that reads the
same forward and backward. The substrings in the returned list should be sorted 
by their order of appearance in the input string. Duplicate substrings should 
be included multiple times.

You may (and should) use the substrings function you wrote in the 
previous exercise.

For the purpose of this exercise, you should consider all characters and pay 
attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' 
are not. In addition, assume that single characters are not palindromes.

Notes:
- input is a string
- output is an array of substrings which are palidromes
  - a palindrome is a string that reads the same forward and backward (str === str.split('').reverse().join(''))
  - a palindrome length is at least 2 chars!

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

Algorithm:
- generate the array of all substrings from the given string
  - main function
    - initiate the result array
    - loop from 0 to string length - 1
      - slice longestSubstring from current index to end of the string

      - generate all leadingSubstrings for a given substring ** (helper function)
        - split the word to array of chars
        - transform each char to the substring from 0 to index + 1

      - concat the leadingSubstrings to the result array and reassign the result array
        to the output of concatination

- filter the substrings which are palindromes
  - iterate over the array and return the substring if it is a palindrome
*/

let isPalindrome = str => {
  let reversed = str
    .split('')
    .reverse()
    .join('');

  return str.length > 1 &&
    str === reversed;
}

console.log(isPalindrome('racecar'));
let substrings = str => {
  let result = [];

  for (let index = 0; index < str.length; index += 1) {
    let longestSubstring = str.slice(index);
    let leadingSubstrings = startingSubstringsAt(longestSubstring);
    result = result.concat(leadingSubstrings);
  }

  return result;
}

function startingSubstringsAt(str) {
  return str
    .split('')
    .map((_, index, strArr) => strArr.slice(0, index + 1).join(''));
}

let palindromes = str => {
  let allSubstrings = substrings(str);
  return allSubstrings
    .filter(element => isPalindrome(element));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]