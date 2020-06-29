What will line 12 log to the console and why?
```js
let greeting = ["Hello"];

const test = arr => {
  arr = ["ByeBye"];
  arr.push("World!");
  return arr;
}

test(greeting);
console.log(greeting);
```
--- 

**My answer:**

On line 10 `console.log` function call prints `["Hello"]` to the console because global variable `greeting` is not reassigned within the body of the function `test`.

On line 1 global variable `greeting` is declared and assigned to reference of the array ["Hello"].

On line 11 function `test` is invoked with the passed in argument `greeting`. The pointer of the array `greeting` is passed as an argument on line 3. At this stage both variable `greeting` and local to the function `test` parameter `arr` are referencing the same array.

On line 4 parameter `arr` (or local variable `arr`) is reassigned to the new array `["ByeBye"]`. That is, local variable `arr` (parameter `arr`) does not reference the place in the computer memory where the object `greeting` variable points to.

From now on, we can't mutate the object variable `greeting` points to because `arr` now points to a different object.

---


**Use parameter or local variable for anything inside a body of the function.**


local variable `arr` is pointing to a different object than local variable `greeting`.

//from now on, we can't mutate the object variable `greeting` points to because `arr` now points to a different object.

On line 5 `push` method is invoked on the new array value. It adds string `"World!"` to the end of the 



greeting ---> object


arr   ----> object

*/