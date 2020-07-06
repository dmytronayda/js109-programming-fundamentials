/*
Counting Up
Write a function that takes an integer argument, and returns an array containing 
all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Examples:

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

Algorithm:
- initiate a result arr
- iterate from 1 to n
  - on each iteration push index to result array
*/

let sequence = max => {
  let arr = [];
  for (let index = 1; index <= max; index += 1) {
    arr.push(index);
  }

  return arr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]