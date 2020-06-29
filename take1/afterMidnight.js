/**
 * The time of day can be represented as the number of minutes before or after midnight. 
 * If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). 
Your method should work with any integer input.

You may not use javascript's Date class methods.

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

Notes: 
- input is an integer
- output is a string 
- there are 1440 minutes in 24 hrs day
- there are 60 minutes in an hour

Algo: 
- convert a number to a hours
  - if number is negative => convert to positive (1440 + num)
  - convert to daily minutes (e.g. 3000 % 1440 = 120 minutes)
  - convert minutes to hours (120 / 60 = 2)
    - if number has a floating point part convert that part to minutes (e.g. Math.floor(0.7 * 60));
- return the string "hours:minutes"
 */

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * 24;

let timeOfDay = minutesNum => {
  let dailyMinutes = minutesNum % MINUTES_IN_DAY;
  if (dailyMinutes < 0) {
    dailyMinutes = MINUTES_IN_DAY + dailyMinutes;
  }
  
  let hours = Math.floor(dailyMinutes / MINUTES_IN_HOUR);
  let minutes = Math.round(((dailyMinutes / MINUTES_IN_HOUR) - hours) * MINUTES_IN_HOUR);
  return prepandZero(hours) + ":" + prepandZero(minutes);
}

let prepandZero = (num) => {
  if (String(num).length < 2) {
    return "0" + String(num);
  }
  return String(num);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");