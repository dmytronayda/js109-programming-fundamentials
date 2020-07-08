/*
In the previous exercise, we developed a recursive solution for computing the nth
Fibonacci number. In a language that is not optimized for recursion, some (but 
not all) recursive functions can be extremely slow and may require massive 
quantities of memory and/or stack space. If you tested for bigger nth numbers, 
you might have noticed that getting the 50th fibonacci number already takes a 
significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive
(or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results 
without using recursion.

Examples:

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

Notes: 
- get num1 = 1
- get num2 = 1
- let result 

- iterate for input times
  - result = num1 + num2
*/

// 1 1 2 3 5 8 13 
// 1 2 3 4 5 6 7 
// fibonacci(6)
/*
n1 = 1 // 1 - 2 - 3 
n2 = 1 // 2 - 3 - 5
result = 0; // 2 - 3 - 5 
iterate for index 0 till 5
  result = n1 + n2
  n1 = n2
  n2 - result
- return result 
*/

let fibonacci = num => {
  let lastTwo = [1, 1];

  for (let counter = 3; counter <= num; counter += 1) {
    lastTwo = [lastTwo[1], lastTwo[0] + lastTwo[1]];
  }

  return lastTwo[1];
}

console.log(fibonacci(50)); // 12586269025