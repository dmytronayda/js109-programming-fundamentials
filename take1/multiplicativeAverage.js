/**
 * Notes: 
 * - input is array
 * - output is a string with 3 floating points
 * 
 * Examples:
 * multiplicativeAverage([3, 5]);                   // "7.500"
 * multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
 * 
 * Algorithm: 
 * - multiple = 1;
 * - loop over the array
 *   - multiple * current element
 * - declare an average and assign to multiple / array.length
 * - get the integer value of the number using Math.floor()
 * - get the number part after floating point
 * - make sure to pad zeros to floating point part if needed
 *   - declare a numString variable
 *   - if string.length is less than 3 append 0 to the end of it otherwise return string
 * - concat int and float strings 
 */ 

function multiplicativeAverage(array) {
  let multiple = 1;
  array.forEach(element => {
    multiple *= element;
  });
  return (multiple / array.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"