/*
Sequence Count
Create a function that takes two integers as arguments. The first argument is a count, 
and the second is the starting number of a sequence that your function will create. 
The function should return an array containing the same number of elements as the count
argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or 
equal to 0. The starting number can be any integer. If the count is 0, the function 
should return an empty array.

Notes:
- input is 2 integers
- output is an array of numbers 
  - length is arg1 number
  - value of the element should be a multiple of arg2 * index of the element

Examples:

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

Algorithm:
- push arg1 for arg2 times to create an array and assign it to startingArr
- transform each element in the array => element * (index + 1)
- return transformed array
*/

let sequence = (counter, startingInt) => {
  if (counter === 0) return [];
  let arr = [];
  for (let index = 1; index <= counter; index += 1) {
    arr.push(startingInt * index);
  }
  return arr;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []