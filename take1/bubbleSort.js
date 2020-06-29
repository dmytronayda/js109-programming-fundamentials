/**
 * Notes:
 * - input is an array
 * - output is a sorted array in place
 * 
 * Examples:
 * bubbleSort([1, 3, 5, 2, 4, 6]); // [1, 2, 3, 4, 5, 6]
 * bubbleSort([1, 5, 3]); // [1, 3, 5]
 * 
 * Algorithm: 
 * - loop over the array untill cannot be swapped anymore
 * - initiate swapped variable with false
 *   - for index 0 to length - 1 inclusive
 *   - if pair is not ordered - swap
 *   - reassign swapped to true
 */

function bubbleSort(array) {
  while(true) {
    let swapped = false;
    for (let index = 1; index < array.length; index += 1) {
      if (array[index - 1] <= array[index]) continue;
      [array[index - 1], array[index]] = [array[index], array[index - 1]];
      swapped = true;
    }
    if (!swapped) break;
  } 
}


let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]