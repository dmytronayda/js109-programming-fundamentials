/**
 * Notes:
 * - input 2 numbers
 * - return a message 
 * 
 * Algorithm: 
 * - question age 
 * - question retirementAge
 * - get year new Date().getFullYear()]
 * - return 2 messages
 */

let readline = require('readline-sync');
let age = readline.question("What's your age? ");
let retirementAge = readline.question("What age would you like to retire? ");

let year = new Date().getFullYear();

console.log(`It's ${year}. You will retire in ${ year + (retirementAge - age)}.`);
console.log(`You have only ${retirementAge - age} years of work to go.`);