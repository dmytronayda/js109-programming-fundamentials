/*
Halvsies
Write a function that takes an array as an argument, and returns an array that contains two elements, 
each of which is an array. Put the first half of the original array elements in the first element of
the return value, and put the second half in the second element. 

If the original array contains an odd number of elements, 
place the middle element in the first half array.

Notes: 
- input is an array (can be odd or even length)
- output is 2 arrays (1st half of the original array in the 1st arr, 2nd half into the second arr)
- if input array contains an odd number of elements - place middle element in the first Arr

Examples:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

Algorithm:
- if input array's length is 0 => return [][]
- define middleElement
  - divide input array len / 2 and call Math.floor method on it
- increment middleElement by 1 if array length is an odd number
- declare a firstHalf and assign it to the slice of the original array from 0 to middleElement
- declare a secondHalf and assign it to the slice of the original array from middleElement up to end of array
- return [firstHalf, secondHalf]
*/

let halvsies = array => {
  if (array.length === 0) return [[],[]];
  let middle = Math.floor(array.length / 2)

  if (array.length % 2 === 1) middle += 1;

  let firstHalf = array.slice(0, middle);
  let secondHalf = array.slice(middle);

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]