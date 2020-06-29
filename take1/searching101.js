/**Notes:
 * - asks for 6 nums from the user
 * - returns whether or not the 6th number was among first 5
 * 
 * examples: 
 * [1, 2, 188, 9, 3, 3] 3 appears in string array
 * [1, 2, 188, 9, 3, 3] 17 does not appear in string array
 * 
 * Algorithm: 
 * - initiate empty array
 * - get 5 numbers and push them into the array
 * - return appropriate message
 */

let readline = require('readline-sync');

let arrayOfNums = [];

let firstNum = readline.question(`Enter the 1st number: `);
arrayOfNums.push(firstNum);

let secondNum = readline.question(`Enter the 2nd number: `);
arrayOfNums.push(secondNum);

let thirdNum = readline.question(`Enter the 3rd number: `);
arrayOfNums.push(thirdNum);

let fourthNum = readline.question(`Enter the 4th number: `);
arrayOfNums.push(fourthNum);

let fifthNum = readline.question(`Enter the 5th number: `);
arrayOfNums.push(fifthNum);

let number = readline.question(`Enter a number to which to compare numbers above: `);

let bigNum = Math.max(...arrayOfNums);

let biggerThanANum = (num, biggestNum) => {
  return (num > biggestNum);
}

arrayOfNums.some(biggerThanANum(number, bigNum)) ? console.log(`Some number is bigger than ${number}`) :
  console.log(`No numbers are bigger than ${number}`);

// arrayOfNums.includes(lastNum) ? console.log(`The number ${lastNum} appears in ${arrayOfNums.join()}.`) :
//                              console.log(`The number ${lastNum} does not appear in ${arrayOfNums.join()}.`);