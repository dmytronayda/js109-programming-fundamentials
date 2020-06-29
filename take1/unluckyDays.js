/**
 * Notes:
 * input is the int number
 * output is the int number
 * 
 * Algorithm: 
 * - declare a result array
 * - loop over the months of a given year and push every day that falls on the 13th to result array
 * - filter fridays from the result array 
 * - return length of the filtered array
 */

function fridayThe13ths(year) {
  let resultArr = [];

  for(let month = 1; month <= 12; month += 1) {
    resultArr.push(new Date(year, month, 13));
  }
  
  return resultArr.filter(day => day.getDay() === 5).length;
}

console.log(fridayThe13ths(2017));