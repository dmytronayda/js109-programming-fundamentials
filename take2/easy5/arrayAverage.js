/*
Array Average
Write a function that takes one argument, an array of integers, and returns the 
average of all the integers in the array, rounded down to the integer component 
of the average. The array will never be empty, and the numbers will 
always be positive integers.

Notes:
- input is an array of integers
- output return a number - average in integer form

Examples:

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

Algorithm:
- reduce the array elements to the sum of all ints
- divide the sum by input arr length to get an average value
- format average value (? using Math.floor)
- return formatted average
*/

let average = array => {
  let numOfElems = array.length;
  let sum = array.reduce((a, b) => a + b);
  let average = Math.floor(sum / numOfElems);
  
  return average;
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40