/*
Stringy Strings
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. 
The length of the string should match the given integer.

Notes:
- input is 1 argument
- output is a string of alternating 1s and 0s always starting with given int

Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Algorithm:
- assign a result array with initial value of ''
- iterate until length of the result is less or equal 6
  - if result === '' || result's last digit === '0'
    - concat '1'
  - else concat '0'
- return result
*/

let stringy = length => {
  let result = '';
  while (result.length < length) {
    if (result === '' || result[result.length - 1] === '0') {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"