/*
After Midnight (Part 2)
As seen in the previous exercise, the time of day can be represented as the number 
of minutes before or after midnight. If the number of minutes is positive, 
the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format,
and return the number of minutes before and after midnight, respectively. 
Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

Notes:
- input is a string
- output is a number of minutes afterMidnight

Examples:

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

Algorithm:
- convert input string to minutes
  - split the string on ':' char
  - convert hours to mins
  - add mins from hours and minutes
*/
const HOURS_DAY = 24;
const MINS_HOUR = 60;
const MINS_DAY = HOURS_DAY * MINS_HOUR;

let toMinutes = string => {
  let minutes = 0;

  let [hours, mins] = string.split(':');
  minutes += Number(hours) * MINS_HOUR;
  minutes += Number(mins);

  return minutes;
}

let afterMidnight = string => {
  if (string === '24:00') return 0;
  return toMinutes(string);
}

let beforeMidnight = string => {
  if (string === '00:00') return 0;
  return MINS_DAY - toMinutes(string);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0); 
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0); 
console.log(beforeMidnight("24:00") === 0);