/**
 * Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Examples:

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

Notes:
- input number
- output array of numbers from 1 to arg value

Algorithm:
- declare a resultArr variable and assign to empty array
- make a loop that goes from 1 to arg value
  - on each iteration push index num to resultArr
- return array
 */

let sequence = num => {
  let resultArr = [];
  for (let index = 1; index <= num; index += 1) {
    resultArr.push(index);
  }
  return resultArr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]