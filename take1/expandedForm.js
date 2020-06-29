/*
Notes:
- input is a number
- output is a string 

Algorithm:
- declare a result array
- declare remainderOftens = 10
- currentNum = 0
- loop over the input number for number.toString().length - 1 times
- return last digit of the number (70304)
  - check if (number % remainderOftens same as currentNum or 0) if true continue
  - reassign currentNum to number % remainderOftens
  - reassign the remainderOftens to itself times 10
  - push currentNum to the result array
  
- return result array joined on ' + '
*/


function expandedForm(num) {
  let result = [];
  let remainderOfTens = 10;
  let currentNum = 0;
  for (let index = 0; index < num.toString().length; index += 1 ) {
    if (num % remainderOfTens === currentNum || num === 0) {
      remainderOfTens *= 10;
      continue;
    }
    currentNum = num % remainderOfTens;
    remainderOfTens *= 10;
    result.push(currentNum);
  }
  
  return result
  .map((num, index) => {
    if (index === 0) return num;
    num -= result[index - 1];
    return num;
  })
  .reverse()
  .join(' + ');
}

console.log(expandedForm(40502));