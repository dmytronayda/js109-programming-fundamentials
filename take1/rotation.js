/**
 * Write a function that rotates the last count digits of a number. 
 * To perform the rotation, move the first of the digits that you want to rotate
 * to the end and shift the remaining digits to the left.

Examples:

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Notes: 
rotateRightmostDigits(735 291, 3);      // 735912
- convert a number to a string => to array => 
  - get leftPart of the array - slice from 0 to array length - arg2
  - get rightPart of the array - slice from length - arg2
- transform the rightPart
  - slice rightPart from index 1 and concat elem 1

- return leftPart concat transformed rightPart, join to form a string and convert to number
 */

function rotateRightmostDigits(number, digitsFromEnd) {
  let stringOfDigits = number.toString();
  let leftPart = stringOfDigits.slice(0, stringOfDigits.length - digitsFromEnd);
  let rightPart = stringOfDigits.slice(stringOfDigits.length - digitsFromEnd);

  rightPart = rightPart.slice(1).concat(rightPart[0]);
  return Number(leftPart.concat(rightPart));
}

// console.log(rotateRightmostDigits(735291, 1));      // 135297
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(352917, 5));      // 329175

/**
 * Take the number 735291 and rotate it by one digit to the left, getting 352917.
 * Next, keep the first digit fixed in place and rotate the remaining digits to get 3 29175. 
 * Keep the first two digits fixed in place and rotate again to get 32 1759. 
 * Keep the first three digits fixed in place and rotate again to get 321 597. 
 * Finally, keep the first four digits fixed in place and rotate the final two digits to get 3215 79. 
 * The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. 
You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Examples:

maxRotation(735291);          // 321579 => 3 52917 => 32 9175 => 321 759 => 3215 97 => 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

Notes: 
- input is an integer
- output is an integer
- on each iteration 2 digits are rotated to the and 0th index digit gets fixed

Algorithm: 
- declare maxRotationNum
- loop from number.length - 1 to 0 
  - on each iteration make rotateRightmostDigits(currentNum, index)
  - update maxRotationNum
- return maxRotationNum
 */

function maxRotation(number) {
  let maxRotationNum = number;
  for (let index = number.toString().length; index > 0; index -= 1) {
    maxRotationNum = rotateRightmostDigits(maxRotationNum, index);
  }
  return maxRotationNum;
} 

console.log(maxRotation(8703529146));      // 7321609845
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped