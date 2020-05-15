/**
 * @param {string} s
 * @return {number}

Problem: convert roman number (string) to an integer based on the provided rules

Rules: 
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Rules exceptions: 
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Examples: 
console.log(romanToInt(III));     // 3
console.log(romanToInt(XXIII));     // 23
console.log(romanToInt(DLXXXIX)); // 589
console.log(romanToInt(MMCC));    // 2200
console.log(romanToInt(MMMCMXCIX));    // 3999

Algorithm: 
- declare results array
- split the string into array of individual characters
- loop over array of characters
  - check if current element and element next to it form exception string from the rules
    - if pair can be found in the rules, push both charactes to the results
    - remove character from the array of individual characters
  - in other case push the respectful value of the individual character to the results
- sum all converted numbers in the results array
- return sum

*/
const romanNums = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900
}


var romanToInt = function(s) {
  let results = [];
  let strArr = s.split('');
  for (let i = 0; i < strArr.length; i += 1) {
      if (Object.keys(romanNums).includes(strArr[i] + strArr[i + 1])) {
          results.push(romanNums[strArr[i] + strArr[i + 1]]);
          strArr.splice(i, 1);
      } else {
          results.push(romanNums[strArr[i]]);
      }
  }
  results = results.reduce((acc, val) => acc + val);
  return results;
};

/**
 * On line 58 `romanToInt` function is declared with one parameter `s`. 
 * 
 * Within the body of the function: 
 * - On line 58 variable `results` is declared and initialized to empty array value
 * - On line 60 variable `strArr` is declared and assigned to value of argument `s` 
 * converted to array of individual characters. This is achieved by invoking `.split()` method 
 * on `s` string.
 * - On line 61 `for` loop is declared. It goes from 0th index of `strArr` value to its last index.
 *  - On line 62 `if` statement is declared. It evaluates whether a return value is truthy. The condition in the paranthesis
 *    itself checks if the array of `romanNums` object properties includes 2-character long string value (current element + (current element + 1))
 *    - if condition evaluates to a truthy value, 2-character long string value is pushed to the `results` array on line 63 
 *    - and, then, `i`-th element is removed from the `strArr` array
 *  - in case 2-char string cannot be found in the `romanNums` object, current value of `i` is used to access the property of `strArr`. 
 * The return value of `strArr[i]`, then, used as a property in `romanNums` object. Final return value is pushed to the results array.
 * 
 * - On line 69 value of the `results` variable is reassigned to a return value of calling `.reduce()` method on the `results` array.
 * `.reduce()` method is called on the array to perform a reducer callback function on each element of the array, resulting in single output.
 * In this case, the return value is the sum of all elements in the `results` array.
 * 
 * - On line 70 value of `results` is returned.
 */