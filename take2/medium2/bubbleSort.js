/*
In this exercise, you will write a function that sorts an array using the bubble
sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On 
each pass, the two values of each pair of consecutive elements are compared. If 
the first value is greater than the second, the two elements are swapped. This 
process is repeated until a complete pass is made without performing any swaps. 

At that point, the array is completely sorted.

Notes: 
- input is an array
- output is an array of sorted elements 

Examples:
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

Algorithm: 
- iterate over the array while true
  - initiate a variable swapped and assign it to false
  - iterate over the array elements from index 1 to end of the array
    - if (index - 1 element) <= current index element value => continue to the next iteration
    - otherwise swap elements: [index - 1, index] = [index, index - 1]
    - reassign swapped to true
  - if swapped is not reassigned within the loop => break out of the infinite while loop
*/

let arrayToSort = [1, 4, 6, 2, 7];

let bubbleSort = arr => {
  while(true) {
    let sorted = false;
    for (let index = 1; index < arr.length; index += 1) {
      if (arr[index - 1] <= arr[index]) continue;
      
      [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
      sorted = true;
    }

    if (!sorted) break;
  }
}

bubbleSort(arrayToSort);
console.log(arrayToSort);