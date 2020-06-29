/**
 * Write a function that takes a number as an argument. 
 * If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

Notes:
- input is a num
- output is a negative num

Algo: 
- convert a num to abs value
- convert to string => prepend '-' => convert back to num
- return negative num
 */

function negative(num) {
  return num < 0 ? num : Math.abs(num) * -1;
}


console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
console.log(negative(1289));     // -1289
console.log(negative(12));     // -12
console.log(negative(-1212));     // -1212

