/*
Always Return Negative
Write a function that takes a number as an argument.
If the argument is a positive number, return the negative of that number.
If the argument is a negative number, return it as-is.


Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

Algorithm: 
- check if input is negative => if yes return the num
- else return 0 - input
*/

let negative = num => {
  return num >= 0 ? num * -1 : num;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0