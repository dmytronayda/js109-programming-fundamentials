/*
Fibonacci Number Location By Length
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) 
such that the first two numbers are 1 by definition, and each subsequent number 
is the sum of the two previous numbers. This series appears throughout the natural world.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. 
For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering
 that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits
specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Notes: 
- input is an integer
- output is an integer - index of the first Fibonacci number that has a number of digits specific by the input
- first Fibonacci number has an index of 1

Examples:

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

// Don't try any higher values until you read the solution Discussion

Algorithm:
- initiate a fibonacci numbers array and assign it to [1, 1]
- iterate until last number in the array converted to digits string has a length of argument
  - generate nextFibonacci number
    - fibonacci arr last element + fibonacci arr next to last element
  - push it to the fibonacci numbers array
- return index of a number + 1
*/

let findFibonacciIndexByLength = numLength => {
  let fibonacciNumsArr = [1, 1];
  do {
    let nextFibonacci = generateFibonacci(fibonacciNumsArr);
    fibonacciNumsArr.push(nextFibonacci);
  } while (fibonacciNumsArr[fibonacciNumsArr.length - 1].toString().length < numLength);
  return fibonacciNumsArr.length;
}

function generateFibonacci(arr) {
  let lastIndexVal = arr[arr.length - 1];
  let nextLastIndexVal = arr[arr.length - 2];
  return lastIndexVal + nextLastIndexVal;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74