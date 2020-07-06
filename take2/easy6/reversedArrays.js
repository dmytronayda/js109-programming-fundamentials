/*
Reversed Arrays
Write a function that takes an Array as an argument, and reverses its elements in place;
that is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse().

Notes: 
- input is an array
- output is the same array

Examples:

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

Algorithm:
- iterate over the array of elements from last to 0th
  - element with index of arr.len - 1 to currentFirst variable
  - splice 0 elements and push 1 
- return the updated array
*/

let reverse = arr => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < (arr.length / 2)) {
    [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
    leftIdx += 1;
    rightIdx -= 1;
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4]));