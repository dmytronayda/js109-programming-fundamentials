/*
After Midnight (Part 1)
The time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns 
the time of day in 24 hour format (hh:mm). 
Your method should work with any integer input.

You may not use javascript's Date class methods.

Notes: 
- input is a time in minutes based format
  - before midnight => input is negative
  - after midnight => input is positive
- output is a string that represent the time in 24 hr format ('00:00')

Examples:

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
The tests above should log true.

Disregard Daylight Savings and Standard Time and other complications.

Algorithm: 
- get number of minuts in the day
- calculate hours and minutes
  - before midnight: minsInDay + input (if input is negative)
    - convert to hours and mins
  - after midnight: 0 + input (if input is positive)
    - convert to hours and mins

- return the time in string format
*/

const HOURS_DAY = 24;
const MINS_HOUR = 60;
const MINS_DAY = HOURS_DAY * MINS_HOUR;

let minsToHours = minutes => Math.floor(minutes / MINS_HOUR);
let minsLeft = minutes => minutes - (minsToHours(minutes) * MINS_HOUR);

let timeOfDay = minutes => {
  let minutesAfterMidnight;
  if (minutes < 0) {
    minutesAfterMidnight = MINS_DAY + minutes;
  } else {
    minutesAfterMidnight = minutes;
  }
  
  let minutesFormated = minsLeft(minutesAfterMidnight).toString().padStart(2, '0');
  let hoursFormated = minsToHours(minutesAfterMidnight).toString().padStart(2, '0');
  return `${hoursFormated}:${minutesFormated}`;
}

console.log(timeOfDay(0)); // === "00:00"
console.log(timeOfDay(-3)); //  === "23:57"
console.log(timeOfDay(35)); //  === "00:35"
console.log(timeOfDay(-1437)); //  === "00:03"
console.log(timeOfDay(3000)); //  === "02:00"
console.log(timeOfDay(800)); //  === "13:20"
console.log(timeOfDay(-4231)); //  === "01:29"