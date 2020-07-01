/*
Searching 101
Write a program that solicits six numbers from the user, then logs a message that
describes whether or not the sixth number appears amongst the first five numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

Algorithm:
- declare an array
- ask user for the input of 5 numbers
- push each number into the array
- ask user for the 6th number
- return the result based on whether array of 5 numbers includes 6th number
*/

let readlineSync = require('readline-sync');

let numbers = [];

let count = ['1st', '2nd', '3rd', '4th', '5th'];
count.forEach(element => {
  let integer = readlineSync.question(`Enter the ${element} number: `);
  numbers.push(Number(integer));
})

let searchElement = Number(readlineSync.question(`Enter the 6th number: `));

if (numbers.includes(searchElement)) {
  console.log(`The number ${searchElement} appears in ${numbers.join(', ')}.`);
} else {
  console.log(`The number ${searchElement} does not appear in ${numbers.join(', ')}.`);
}