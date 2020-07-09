/*
Sum Square - Square Sum
Write a function that computes the difference between the square of the sum of
the first count positive integers and the sum of the squares of the first count 
positive integers.

Notes:
- input is a number
- output is a number 
  - that is a difference between squreOfSum of 1st count positive ints
    - sum from 1 to input num (1 + 2..+ num) ** 2 
  and sumOfSqures
    - 1 ** 2 + 2**2 ... 3**2

Examples:

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

Algorithm: 
- initiate a squareOfSum arr
- initiate a sumOfSquares arr
- iterate from 1 to n inclusive
  - push current index num to the squareOfSum
  - push current index num ** 2 to the sumOfSquares

- reduce the squareOfSum arr to the sum of its elements && ** 2
- reduce the sumOfSquares arr to the sum of its elements

- return squareOfSum - sumOfSquares
*/

let sumSquareDifference = counter => {
  let squareOfSum = [];
  let sumOfSquares = [];

  for (let index = 1; index <= counter; index += 1) {
    squareOfSum.push(index);
    sumOfSquares.push(index ** 2);
  }

  squareOfSum = squareOfSum.reduce((acc, currentVal) => acc + currentVal) ** 2;
  sumOfSquares = sumOfSquares.reduce((acc, currentVal) => acc + currentVal);

  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150