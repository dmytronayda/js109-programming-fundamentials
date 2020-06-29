/*
Convert a String to a Signed Number!
In the previous exercise, you developed a function that converts simple numeric strings to integers. 
In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits, and returns the appropriate number as an integer. 
The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; 
if it is a -, your function should return a negative number. If no sign is given, you should return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

Examples

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

Algorithm: 
- initialize a sign variable
- check if 0th index element in the digits string is a "-" sign
  - if it is reassign sign to "NEGATIVE_NUMBER";
  - remove 0th index element
- check if 0th index element in the digits string is a "+" sign
  - if it is reassign sign to "POSITIVE_NUMBER";
  - remove 0th index element
- check if 0th index element in the digits string is a digit
  - if it is reassign sign to "POSITIVE_NUMBER";
- convert a string of digits to a number
- based on the sign variable
  - if sign === "POSITIVE_NUMBER" => return a number
  - if sign === "NEGATIVE_NUMBER" => return 0 - number
*/

const NUMBERS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
}

let stringToInteger = numString => {
  let digits = numString.split('');
  let arrOfNums = digits.map(digitStr => NUMBERS[digitStr]);
  
  let multiplyBy = 1;
  let numbersToAdd = [];
  for (let index = arrOfNums.length - 1; index >= 0 ; index -= 1) {
    numbersToAdd.push(arrOfNums[index] * multiplyBy);
    multiplyBy *= 10;
  }

  return numbersToAdd.reduce((a, b) => a + b);
}

function stringToSignedInteger(stringOfDigits) {
  let sign = '';
  if (stringOfDigits[0] === '-') {
    sign = "NEGATIVE_NUMBER";
    stringOfDigits = stringOfDigits.slice(1);
  } else if (stringOfDigits[0] === '+') {
    stringOfDigits = stringOfDigits.slice(1);
  }

  let number = stringToInteger(stringOfDigits);
  if (sign === "NEGATIVE_NUMBER") return 0 - number;
  return number;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100);  // logs true