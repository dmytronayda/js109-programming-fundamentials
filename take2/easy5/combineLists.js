/*
Combine Two Lists
Write a function that combines two arrays passed as arguments, 
and returns a new array that contains all elements from both array arguments, 
with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the
same number of elements.

Notes:
- input is 2 arrays
- output is 1 array that contains all elements

Example:

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

Algorithm:
- iterate from 0 to arr2 lenght - 1
  - on each iterate splice current index element to the arr1
*/

let interleave = (arr1, arr2) => {
  let result = [];
  arr1.forEach((element, index) => {
    result.push(element, arr2[index]);
  })
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]