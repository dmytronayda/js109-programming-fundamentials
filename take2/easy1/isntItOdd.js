/**
 * Notes:
 * - input is 1 argument that may be positive, negative or zero
 * - output is a boolean which depends on the number's absolute value
 * 
 * Examples:
 * isOdd(2); //false
 * isOdd(3); //true
 * isOdd(-11); //true
 * 
 * Algorithm:
 * - convert input to an absolute value
 * - check if abs value is odd and return the result of comparison
 */

function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

console.log(isOdd(2)); //false
console.log(isOdd(3)); //true
console.log(isOdd(-11)); //true
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true