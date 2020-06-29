/**
 * Notes:
 * - Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
 * - first two numbers are 1s by definition 
 * - each subsequent number is the sum of the two previous ones
 * 
 * 
 * 
 * Algo:
 * - write a loop that pushes a fibonacci number till the condition is met (when number.length in the series < argument)
 *   - push fibonacci num till number of digits of last element is N
 *     - let resultArr = [1, 1]
 *     - nextFibNum = resultArr[resultArr.length - 1] + resultArr[resultArr.length - 2]
 *     - resultArr.push(nexFibNum);
 * - return the index of the last element in the result array
 */

function findFibonacciIndexByLength(n) {
  let arr = [1, 1];

  while (arr[arr.length - 1].toString().length < n) {
    let nexFibNum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nexFibNum);
  }
  
  return arr.length;
}

console.log(findFibonacciIndexByLength(2));   // 7
console.log(findFibonacciIndexByLength(10));  // 45
console.log(findFibonacciIndexByLength(16));  // 74