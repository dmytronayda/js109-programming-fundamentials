/*
How old is Teddy?
Build a program that randomly generates Teddy's age, and logs it to the console. 
Have the age be a random number between 20 and 120 (inclusive).

Example Output:

Teddy is 69 years old!

Algorithm: 
- get a random number
 - ? Math.random() * (max - min) + min
- print the message with random num between
*/

let randomNumBetween = (min, max) => {
  let randomNum = Math.random();
  let randomNumBetween = randomNum * (max - min) + min;
  return Math.floor(randomNumBetween);
}

console.log(`Teddy is ${randomNumBetween(20, 120)} years old!`);