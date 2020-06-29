/**
 * 
 */
let computed = {};

function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  else if (computed[num]) return computed[num];
  else {
    computed[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return computed[num];
  }
}

// function fibonacci(num) {
//   let previousTwo = [1, 1];
//   for (let counter = 3; counter <= num; counter += 1) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }
//   return previousTwo[1];
// }