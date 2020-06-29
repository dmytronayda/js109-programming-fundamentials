/*
Notes:
- input is a string
- output is a greeting message with the string. If input's last char === '!' return the greeting message in all CAPS.

Examples:
What's your name? Bob
Hello Bob.

What's your name? Bob!
HELLO BOB. WHY ARE YOU SCREAMING?

Algorithm:
- prompt for the user name and assign the input to the variable userName
- if userName's last char === '!' return ALL_CAPS message
- return normal message
*/
let readline = require('readline-sync');
let userName = readline.question("What's your name? ");

let greetings = name => {
  if (name[name.length - 1] === '!') {
    return `HELLO ${name.toUpperCase()} WHY ARE YOU SCREAMING?`;
  }
  return `Hello ${name}.`;
}

console.log(greetings(userName));