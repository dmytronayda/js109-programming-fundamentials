/**
 * As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. 
 * If the number of minutes is positive, the time is after midnight. 
 * If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. 
Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

Examples:

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

Notes: 
- input is a string
- output is a number from 0 to 1439
- before midnight means 0 minus number && convert to minutes
- after minutes means 0 plus number && convert to minutes

Algo: 
convert string to a number of minutes
  if string is 00:00 or 24:00, return 0
  else: 
  - convert number before colon to hours && then to minutes
  - convert number after colon to minutes
  - sum hours + minutes to total number of minutes

beforeMidnight: 1440 - number if 1440 - return 0
afterMidnight: 0 + number
 */
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

let numberOfMins = string => {
  let hours = Number(string.split(":")[0]);
  let minutes = Number(string.split(":")[1]);
  minutes = hours * MINUTES_IN_HOUR + minutes;
  return minutes;
}

let beforeMidnight = string => {
  let minutes = MINUTES_IN_DAY - numberOfMins(string);
  return minutes !== MINUTES_IN_DAY ? minutes : 0;
}

let afterMidnight = string => {
  let minutes = numberOfMins(string);
  return minutes === MINUTES_IN_DAY ? 0 : minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);