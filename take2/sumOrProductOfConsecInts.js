

let readLine = require('readline-sync');

let integer = readLine.question(`Please enter an integer greater than 0: `);
integer = Number(integer);

let operation = readLine.question(`Enter "s" to compute the sum, or "p" to compute the product. `);
 
calculate(integer, operation);

function calculate(integer, operation) {
  let numbers = [];
  for (let num = 1; num < integer; num += 1) {
    numbers.push(num);
  }
  if (operation === 's') {
    let sum = numbers.reduce((a, b) => a + b);
    let messageSum = `The sum of the integers between 1 and ${integer} is ${sum}.`; 
    console.log(messageSum);
  } else if (operation === 'p') {
    let product = numbers.reduce((a, b) => a * b);
    let messageProduct = `The sum of the integers between 1 and ${integer} is ${product}.`; 
    console.log(messageProduct);
  } else {
    console.log("Only available options are 's' or 'p'!");
  }
}