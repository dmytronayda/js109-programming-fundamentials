/**
 * Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. 
 * The array will never be empty, and the numbers will always be positive integers.

Examples:

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

 * Notes:
 * - input array of ints
 * - output is a int number
 * 
 * Algo: 
 * - sum all elements of the array
 * - divide the sum by the length of the array 
 * - return the result of the division as an int number 
 */

function average(array) {
  let sum = array.reduce((previousNum, currentNum) => previousNum + currentNum);
  let average = Math.floor(sum / array.length);
  return average;
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40