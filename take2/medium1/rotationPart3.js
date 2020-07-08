/*
Rotation (Part 3)

Take the number 735291 and rotate it by one digit to the left, getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits to
get 329175. Keep the first two digits fixed in place and rotate again to get
321759. Keep the first three digits fixed in place and rotate again to get 
321597. Finally, keep the first four digits fixed in place and rotate the final
two digits to get 321579. The resulting number is called the maximum rotation 
of the original number.

Write a function that takes an integer as an argument, and returns the maximum 
rotation of that integer. You can (and probably should) use the 
rotateRightmostDigits function from the previous exercise.

Notes: 
- input is a number
- output is a number - which is a maximum rotation of the original number

- initiate the result array
  - maximum rotation ?? 
    - while condition (arr.length > 2)
      - rotate to the left and push 0th index to the end
      - push the current 0 index to the result array 
      - remove current 0 index
        - ? splice()

- result concat arr

- convert to number 


Examples:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
*/

let rotateArray = arr => {
  if (!Array.isArray(arr)) return undefined;
  if(arr.length < 2) return arr;

  let last = arr[0];
  let shiftLeft = arr.slice(1);
  let result = shiftLeft.concat(last);
  
  return result
}


let maxRotation = num => {
  let result = [];
  let digits = num.toString().split('');

  while (digits.length > 2) {
    digits = rotateArray(digits);
    let currentFirst = digits[0];
    
    result.push(currentFirst);
    digits.splice(0, 1);
  }

  return toNumber(result, rotateArray(digits));
}

console.log(maxRotation(735291));          // 321579