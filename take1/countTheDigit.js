/*
Notes: 
- input is an integer n >= 0 and digit 0 <= d <= 9
- make a list of squares of all numbers from 0 to n 
- return the number of times digit d appears

Examples: 
nbDig(4, 1); // 0, 1, 4, 9, 16 => 2

Algorithm:
- declare a count variable and assign it to 0
- make a list of all integers from 0 to n 
- make a list of all squares
- loop over the list of squared numbers
  - loop over the digits of a current number
    - if current digit === d 
    - increase count value by 1
- return a count value
*/

function nbDig(n, d) {
  let count = 0;
  let squares = [];
  for(let number = 0; number < n; number += 1) {
    squares.push(Math.pow(number, 2));
  }
  squares.forEach(num => {
    num.toString()
    .split('')
    .forEach(digit => {
        if (Number(digit) === d) {
          count += 1;
        }
      })
  })
  return count;
}

console.log(nbDig(11011, 2)); //9481