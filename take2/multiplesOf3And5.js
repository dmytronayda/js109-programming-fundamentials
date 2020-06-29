/*
Notes:
- input is a number
- output is a sum of multiples of 3 and 5 between 1 and input number

Examples: 
multisum(3); // 3
multisum(5); // 8
multisum(10); // 3 + 5 + 6 + 9 + 10 = 33

Algorithm:
- initiate a result arr
- loop from 1 to input number
- if number is evenly divisible by 3 or number is evenly divisible by 5 => push the number to the resul arr
- return result arr reduced to the sum of its elements
*/

let multisum = maxNum => {
  let result = [];
  for (let integer = 1; integer <= maxNum; integer += 1) {
    if (integer % 3 === 0|| integer % 5 === 0) {
      result.push(integer);
    }
  }
  return result.reduce((a, b) => a + b);
}

console.log(multisum(1000));    // 234168
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33