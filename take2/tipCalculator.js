/*
- input is a bill amount and a tip rate
- output is a tip and total amount (bil + tip)
*/
let readlineSync = require('readline-sync');

let bill = readlineSync.question('What is the bill? ');
let tipPercentage = readlineSync.question('What is the tip percentage? ');
let tip = (Number(bill)/100 * Number(tipPercentage)).toFixed(2);
let total = (Number(bill) + Number(tip)).toFixed(2);

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);