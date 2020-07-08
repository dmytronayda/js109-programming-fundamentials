/*
Rotation (Part 2)
Write a function that rotates the last count digits of a number. 
To perform the rotation, move the first of the digits that you want to rotate to
the end and shift the remaining digits to the left.

Examples:

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Algorithm:
- get rotationIdx = arr.length - arg2
- get leftSlice 
  - slice from 0 to rotationIdx
- get rigthSlice = 
  - slice from rotationIdx
- rigthSlice rotate
  - convert digits to array of digits
  - call rotateArr function 
  - convert a slice back to string
- return leftSlice + rightSlice 
*/

let rotateArray = arr => {
  if (!Array.isArray(arr)) return undefined;
  if(arr.length < 2) return arr;

  let last = arr[0];
  let shiftLeft = arr.slice(1);
  let result = shiftLeft.concat(last);
  
  return result;
}

let rotateRightmostDigits = (num, rotateRightmost) => {
  let numArr = num.toString().split('');
  let rotationIdx = numArr.length - rotateRightmost;

  let leftSlice = numArr.slice(0, rotationIdx);
  let rightSlice = numArr.slice(rotationIdx);

  rightSlice = rotateArray(rightSlice);

  return toNumber(leftSlice, rightSlice);
}

function toNumber(arr1, arr2) {
  return Number(arr1.concat(arr2).join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917