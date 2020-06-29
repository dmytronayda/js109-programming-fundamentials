/*
Notes:
- input is 2 positibe ints
- prints the result of operations: addition, subtraction, product, quotient, remainder, and power
- no need to validate the input

Examples:
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103

Algorithm:
- prompt the user using readlineSync functionality for firstNum
- prompt the user using readlineSync functionality for sedonNum
- make an object with properties addition, subtraction, product, quotient, remainder, and power and assign them to the respectful function
- print the results to the console
*/

let readline = require('readline-sync');
let prompt = message => console.log(`==> ` + `${message}`);

let firstNum = readline.question('==> Enter the first number: ');
firstNum = Number(firstNum);

let secondNum = readline.question('==> Enter the second number: ');
secondNum = Number(secondNum);

let operations = {
  addition: function(num1, num2) {
    return `${num1} + ${num2} = ${num1 + num2}`;
  },
  subtraction: function(num1, num2) {
    return `${num1} - ${num2} = ${num1 - num2}`;
  },
  product: function(num1, num2) {
    return `${num1} * ${num2} = ${num1 * num2}`;
  },
  quotient: function(num1, num2) {
    return `${num1} / ${num2} = ${Math.floor(num1 / num2)}`;
  },
  remainder: function(num1, num2) {
    return `${num1} % ${num2} = ${num1 % num2}`;
  },
  power: function(num1, num2) {
    return `${num1} ** ${num2} = ${num1 ** num2}`;
  },
}

Object.keys(operations).forEach(key => {
  prompt(operations[key](firstNum, secondNum));
})