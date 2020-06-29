/**
 * Notes: 
 * - 60 minutes in a degree
 * - 60 seconds in a minute
 * - 1 degree is 360 seconds
 * 
 * 
 * Algorithm: 
 * - get the number of degrees
 * - get the number of minutes
 * - get the number of seconds
 * - pad zeros for degrees without floating points
 * - concat appropriate sign for minutes and seconds and return full string
 */

const degreeChar = '˚';
const minuteChar = "'";
const secondChar = '"';
const MINUTES_IN_DEGREE = 60;
const SECONDS_IN_MINUTE = 60;

function cuteAngels(number) {
  let degrees = Math.floor(number);
  let minutes = Math.floor((number - degrees) * MINUTES_IN_DEGREE);
  let seconds = Math.floor(((number - degrees) * MINUTES_IN_DEGREE - minutes) * SECONDS_IN_MINUTE);
  
  let float = number - Math.floor(number)
  if (float === 0) {
    minutes = "00";
    seconds = "00";
  }

  console.log(degrees + degreeChar + minutes + minuteChar + seconds + secondChar);
}

cuteAngels(30);
cuteAngels(76.73);
cuteAngels(254.6);
cuteAngels(93.034773);
cuteAngels(360);