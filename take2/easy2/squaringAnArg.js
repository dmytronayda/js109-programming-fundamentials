/*
Notes:
- using the multiply function from multiplyTwoNums problem
- input is a number
- output is a square of the number
- if number is negative - convert it to the absolute value first

Examples: 
console.log(square(5) === 25);  // true
console.log(square(-8) === 64); // true

Algorithm:
- if use arg value for 1st and second arguments in the multiply function
*/

let multiply = (num1, num2) => {
  return num1 * num2;
}

let square = num => {
  return multiply(num, num);
}

console.log(square(5) === 25); // true
console.log(square(-8) === 64); // true