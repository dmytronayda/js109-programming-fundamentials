/**
 * Notes:
 * - input 3 integers
 * - output is a string
 * 
 * Example: 
 * triangle(3, 3, 3); // "equilateral"
 * triangle(3, 3, 0); // "invalid"
 * triangle(3, 2, 2); // "isosceles"
 * triangle(3, 1, 5); // "scalene"
 * 
 * Algorithm:
 * - check if input is valid
 *   - none of the args equals to 0
 *   - biggest num is less than sum of 2 other arguments
 *   - if either condition above is true, return 'invalid' string
 * - if all args === args 0, return "equilateral"
 * - if all args are different, return "scalene"
 * - else return "isosceles"
 */

function validTriangle(arg1, arg2, arg3) {
  if (arg1 === 0 || arg2 === 0 || arg3 === 0) return false;

  let longestSide = Math.max(arg1, arg2, arg3);
  let sumLengths = arg1 + arg2 + arg3 - longestSide;
  if (sumLengths < longestSide) return false;

  return true;
}

function triangle(arg1, arg2, arg3) {
  if (validTriangle(arg1, arg2, arg3)) {
    if (arg1 === arg2 && arg1 === arg3) return 'equilateral';
    if (arg1 === arg2 && arg1 !== arg3 ||
        arg2 === arg3 && arg2 !== arg1) return 'isosceles';
    return 'scalene';
  }
  return 'invalid'
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"